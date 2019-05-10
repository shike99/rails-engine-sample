<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <div>ID: {{ user.id }}</div>
      <router-link :to="`/admin/users/${user.id}`">Name: {{ user.name }}</router-link>
      <div>Role: {{ user.role }}</div>
      <router-link :to="`/admin/users/${user.id}/edit`">Edit</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { User } from '@/types/user'

@Component
export default class extends Vue {
  @Prop({ required: true }) users!: User[]
}
</script>
