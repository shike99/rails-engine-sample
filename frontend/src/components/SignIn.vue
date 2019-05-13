<template>
  <form @submit="handleSubmit">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <input type="submit" value="submit" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cookies from 'js-cookie'
import { AxiosResponse } from 'axios'
import http from '@/plugins/http'
import { Session, Auth } from '@/types/session'
import { User } from '@/types/user'

@Component
export default class extends Vue {
  private email: string = ''
  private password: string = ''

  handleSubmit(e: Event) {
    e.preventDefault()

    const params = { email: this.email, password: this.password }
    http.post('/api/auth/sign_in', params).then((response: AxiosResponse) => {
      const responseHeaders = response.headers
      const authHeaders: Auth = {
        'access-token': responseHeaders['access-token'],
        client: responseHeaders.client,
        expiry: responseHeaders.expiry,
        uid: responseHeaders.uid,
        'token-type': responseHeaders['token-type'],
      }
      const user: User = response.data.data

      this.$store.commit('setUser', user)

      const session: Session = {
        tokens: authHeaders,
        user,
      }
      Cookies.set('session', JSON.stringify(session), { expires: 14 })

      if (this.$route.query.redirect) {
        location.href = this.$route.query.redirect
      } else {
        this.$router.push({ name: 'home' })
      }
    })
  }
}
</script>
