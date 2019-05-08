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

@Component
export default class extends Vue {
  created() {
    this.$store.dispatch('fetchArticle', this.$route.params.id)
  }

  get article() {
    return this.$store.getters.article
  }
}
</script>
