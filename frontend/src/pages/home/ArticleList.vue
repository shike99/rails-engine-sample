<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <router-link :to="`/articles/${article.id}`">Title: {{ article.title }}</router-link>
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
