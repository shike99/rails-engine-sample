<template>
  <form @submit="handleSubmit">
    <input type="text" v-model="title" placeholder="title" />
    <textarea v-model="text" placeholder="text" />
    <input type="submit" value="Create" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import http from '@/plugins/http'
import { Article } from '@/types/article'
import { User } from '@/types/user'

@Component
export default class extends Vue {
  private title: string = ''
  private text: string = ''

  handleSubmit(e: Event): void {
    e.preventDefault()

    const author: User = this.$store.getters.user
    const params = { title: this.title, text: this.text, author_id: author.id }
    http
      .post('/api/admin/articles', params)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))
  }
}
</script>
