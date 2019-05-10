<template>
  <div>
    <router-link to="/admin/articles/new">New Article</router-link>
    <article-list :articles="articles" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArticleList from '@/components/admin/ArticleList.vue'
import { Article } from '@/types/article'

@Component({
  components: {
    ArticleList,
  },
})
export default class extends Vue {
  created(): void {
    this.$store.dispatch('fetchArticles')
  }

  get articles(): Article[] {
    return this.$store.getters.articles
  }
}
</script>
