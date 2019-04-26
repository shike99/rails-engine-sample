<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <div>ID: {{ user.id }}</div>
      <div>Name: {{ user.name }}</div>
      <div>Email: {{ user.email }}</div>
      <div>Role: {{ user.role }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  created(): void {
    this.$store.dispatch('fetchUsers')
  }

  get users() {
    return this.$store.getters.users
  }
}
</script>
