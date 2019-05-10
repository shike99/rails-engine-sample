<template>
  <form @submit="handleSubmit">
    <input type="text" v-model="title" placeholder="title" />
    <textarea v-model="text" placeholder="text" />
    <input type="submit" value="Update" />
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import http from '@/plugins/http'
import { Article } from '@/types/article'
import { User } from '@/types/user'

@Component
export default class extends Vue {
  private title: string = ''
  private text: string = ''

  async beforeCreate() {
    const articleId = this.$route.params.id
    const article: Article = (await http.get(`/api/admin/articles/${articleId}`)).data
    this.title = article.title
    this.text = article.text
  }

  handleSubmit(e: Event): void {
    e.preventDefault()

    const params = { title: this.title, text: this.text }
    http
      .patch(`/api/admin/articles/${this.$route.params.id}`, params)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))
  }
}
</script>
