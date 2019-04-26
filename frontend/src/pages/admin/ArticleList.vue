<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <div>ID: {{ article.id }}</div>
      <div>Title: {{ article.title }}</div>
      <div>Text: {{ article.text }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  created(): void {
    this.$store.dispatch('fetchArticles')
  }

  get articles() {
    return this.$store.getters.articles
  }
}
</script>
