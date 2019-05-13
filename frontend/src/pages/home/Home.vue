<template>
  <div id="app">
    <h1>Article List</h1>
    <a v-if="user.role === 'admin'" href="/admin">Admin Page</a>
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
import { User } from '@/types/user'

@Component
export default class extends Vue {
  beforeCreate() {
    const session = Cookies.get('session')
    if (session) {
      const sessionJson: Session = JSON.parse(session)
      this.$store.commit('setUser', sessionJson.user)
    }
  }

  get user(): User {
    return this.$store.getters.user
  }
}
</script>
