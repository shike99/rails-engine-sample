<template>
  <div>
    <div>ID: {{ article.id }}</div>
    <div>Title: {{ article.title }}</div>
    <div>Author: {{ article.author.name }}</div>
    <div>Text: {{ article.text }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Article } from '@/types/article'

@Component
export default class extends Vue {
  created() {
    this.$store.dispatch('fetchArticle', this.$route.params.id)
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    this.$store.dispatch('fetchArticle', to.params.id)
    next()
  }

  get article(): Article {
    return this.$store.getters.article
  }
}
</script>
