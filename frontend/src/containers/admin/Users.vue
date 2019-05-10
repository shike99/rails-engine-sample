<template>
  <div>
    <user-list :users="users" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserList from '@/components/admin/UserList.vue'
import { User } from '@/types/user'

@Component({
  components: {
    UserList,
  },
})
export default class extends Vue {
  created(): void {
    this.$store.dispatch('fetchUsers')
  }

  get users(): User[] {
    return this.$store.getters.users
  }
}
</script>
