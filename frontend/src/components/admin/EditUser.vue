<template>
  <form @submit="handleSubmit">
    <input type="text" v-model="name" placeholder="name" />
    <input type="text" v-model="nickname" placeholder="nickname" />
    <input type="text" v-model="image" placeholder="image url" />
    <select v-model="role">
      <option v-for="roleOption in roleOptions" :key="roleOption.value" :value="roleOption.value">{{
        roleOption.text
      }}</option>
    </select>
    <input type="submit" value="Update" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import http from '@/plugins/http'
import { User } from '@/types/user'

interface RoleOption {
  text: string
  value: string
}

enum Role {
  member = '0',
  admin = '1',
}

@Component
export default class extends Vue {
  private name: string = ''
  private nickname: string = ''
  private image: string = ''
  private role: string = ''
  private roleOptions: RoleOption[] = [{ text: 'Member', value: Role.member }, { text: 'Admin', value: Role.admin }]

  async beforeCreate() {
    const userId = this.$route.params.id
    const user: User = (await http.get(`/api/admin/users/${userId}`)).data
    this.name = user.name
    this.nickname = user.nickname
    this.image = user.image
    this.role = Role[user.role]
  }

  handleSubmit(e: Event): void {
    e.preventDefault()

    const params = { name: this.name, nickname: this.nickname, image: this.image, role: +this.role }
    http
      .patch(`/api/admin/users/${this.$route.params.id}`, params)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))
  }
}
</script>
