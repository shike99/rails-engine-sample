<template>
  <form @submit="handleSubmit">
    <vs-input label="Email" v-model="email"></vs-input>
    <vs-input label="Password" v-model="password"></vs-input>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private email
  private password

  created(): void {
    this.$store.dispatch('fetchArticles')
  }

  handleSubmit() {
    this.$http.post('/v1/authentication/sign_in', { email: this.email, password: this.password }).then(response => {
      // Again commits the relevant headers to the store.
      const responseHeaders = response.headers
      const authHeaders = {
        'access-token': responseHeaders['access-token'],
        client: responseHeaders['client'],
        expiry: responseHeaders['expiry'],
        uid: responseHeaders['uid'],
        'token-type': responseHeaders['token-type'],
      }

      this.$store.commit('auth', authHeaders)

      // response.data.data is an object containing public information about the current user.
      // This is useful to keep track of so that your app can display the current user's
      // email/username somewhere.
      this.$store.commit('setUser', response.data.data)

      // Write both the response headers and the current user data to the cookie.
      const contents = {
        tokens: authHeaders,
        user: response.data.data,
      }

      this.$cookie.set('session', JSON.stringify(contents), { expires: '14D' })

      // Go home or wherever the user originally wanted to go
      this.$router.push({ name: 'home' })
    })
  }

  get articles() {
    return this.$store.getters.articles
  }
}
</script>
