import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    articles: [],
  },
  getters: {
    users: state => state.users,
    articles: state => state.articles,
  },
  mutations: {
    setUsers(state, users): void {
      state.users = users
    },
    setArticles(state, articles): void {
      state.articles = articles
    },
  },
  actions: {
    async fetchUsers({ commit }): Promise<void> {
      const users = (await axios.get('/api/admin/users')).data
      commit('setUsers', users)
    },
    async fetchArticles({ commit }): Promise<void> {
      const articles = (await axios.get('/api/admin/articles')).data
      commit('setArticles', articles)
    },
  },
})
