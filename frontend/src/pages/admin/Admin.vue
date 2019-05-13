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
import { verifyToken } from '@/plugins/auth'
import { Session } from '@/types/session'

@Component
export default class extends Vue {
  async beforeCreate() {
    const response = await verifyToken()
    if (!response.success) {
      this.$router.push({ name: 'sign-in', query: { redirect: this.$route.fullPath } })
    } else {
      this.$store.commit('setUser', response.data)
    }
  }
}
</script>
