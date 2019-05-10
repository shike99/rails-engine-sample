<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <div>ID: {{ article.id }}</div>
      <a :href="`/articles/${article.id}`">Title: {{ article.title }}</a>
      <div>Created Date: {{ article.created_at }}</div>
      <div>Updated Date: {{ article.updated_at }}</div>
      <router-link :to="`/admin/articles/${article.id}/edit`">Edit</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Article } from '@/types/article'

@Component
export default class extends Vue {
  @Prop({ required: true }) private articles!: Article[]
}
</script>
