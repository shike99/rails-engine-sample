import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/plugins/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    users: [],
    articles: [],
  },
  getters: {
    user: state => state.user,
    users: state => state.users,
    articles: state => state.articles,
  },
  mutations: {
    setUser(state, user): void {
      state.user = user
    },
    setUsers(state, users): void {
      state.users = users
    },
    setArticles(state, articles): void {
      state.articles = articles
    },
  },
  actions: {
    async fetchUsers({ commit }): Promise<void> {
      const users = (await http.get('/api/admin/users')).data
      commit('setUsers', users)
    },
    async fetchArticles({ commit }): Promise<void> {
      const articles = (await http.get('/api/admin/articles')).data
      commit('setArticles', articles)
    },
  },
})
