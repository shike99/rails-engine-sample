<template>
  <div>
    <div>ID: {{ article.id }}</div>
    <h2>{{ article.title }}</h2>
    <div>Author: {{ article.author && article.author.name }}</div>
    <p class="text">{{ article.text }}</p>
    <a v-if="user.role === 'admin'" :href="`/admin/articles/${article.id}/edit`">Edit</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Article } from '@/types/article'
import { User } from '@/types/user'

@Component
export default class extends Vue {
  beforeCreate() {
    this.$store.dispatch('fetchArticle', this.$route.params.id)
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    this.$store.dispatch('fetchArticle', to.params.id)
    next()
  }

  get article(): Article {
    return this.$store.getters.article
  }

  get user(): User {
    return this.$store.getters.user
  }
}
</script>

<style lang="postcss" scoped>
.text {
  white-space: pre;
}
</style>
