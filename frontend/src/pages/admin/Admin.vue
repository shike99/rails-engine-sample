<template>
  <div>
    <h1>Admin Page</h1>
    <ul>
      <li><router-link to="/admin/users">User list</router-link></li>
      <li><router-link to="/admin/articles">Article list</router-link></li>
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
      this.$store.commit('setUser', sessionJson.user)
    }
  }
}
</script>
