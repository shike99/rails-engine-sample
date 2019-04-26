<template>
  <form @submit="handleSubmit">
    <vs-input label="Email" v-model="email"></vs-input>
    <vs-input label="Password" v-model="password"></vs-input>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  created(): void {
    this.$store.dispatch('fetchArticles')
  }

  handleSubmit() {
    this
  }

  get articles() {
    return this.$store.getters.articles
  }
}
</script>
