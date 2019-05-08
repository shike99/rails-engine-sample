<template>
  <form @submit="handleSubmit">
    <input type="email" label="Email" v-model="email" />
    <input type="password" label="Password" v-model="password" />
    <input type="submit" value="submit" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cookies from 'js-cookie'
import http from '@/plugins/http'

@Component
export default class extends Vue {
  private email: string = ''
  private password: string = ''

  handleSubmit(e) {
    e.preventDefault()
    http.post('/api/auth/sign_in', { email: this.email, password: this.password }).then(response => {
      const responseHeaders = response.headers
      const authHeaders = {
        'access-token': responseHeaders['access-token'],
        client: responseHeaders['client'],
        expiry: responseHeaders['expiry'],
        uid: responseHeaders['uid'],
        'token-type': responseHeaders['token-type'],
      }
      const user = response.data.data

      this.$store.commit('setAuth', authHeaders)
      this.$store.commit('setUser', user)

      const contents = {
        tokens: authHeaders,
        user,
      }

      Cookies.set('session', JSON.stringify(contents), { expires: 14 })

      this.$router.push({ name: 'home' })
    })
  }
}
</script>
