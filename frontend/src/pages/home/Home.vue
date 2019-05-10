<template>
  <div id="app">
    <h1>Article List</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/sign_in">Sign In</router-link></li>
      <li><router-link to="/sign_up">Sign Up</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cookies from 'js-cookie'
import { Session } from '@/types/session'

@Component
export default class extends Vue {
  beforeCreate() {
    const session = Cookies.get('session')
    if (session) {
      const sessionJson: Session = JSON.parse(session)
      this.$store.commit('setAuth', sessionJson.tokens)
      this.$store.commit('setUser', sessionJson.user)
    }
  }
}
</script>
