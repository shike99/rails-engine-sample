<template>
  <div>
    <div>ID: {{ user.id }}</div>
    <div>Name: {{ user.name }}</div>
    <div>Nickname: {{ user.nickname }}</div>
    <img :src="user.image" />
    <div>Email: {{ user.email }}</div>
    <div>Role: {{ user.role }}</div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import http from '@/plugins/http'
import { User } from '@/types/user'

@Component
export default class extends Vue {
  private user: User | {} = {}

  async created() {
    const userId = this.$route.params.id
    this.user = (await http.get(`/api/admin/users/${userId}`)).data
  }
}
</script>
