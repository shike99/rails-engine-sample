import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    articles: [],
  },
  getters: {
    user: state => state.user,
    articles: state => state.articles,
  },
  mutations: {
    setUser(state, user): void {
      state.user = user
    },
    setArticles(state, articles): void {
      state.articles = articles
    },
  },
  actions: {
    async fetchArticles({ commit }): Promise<void> {
      const articles = (await axios.get('/api/articles')).data
      commit('setArticles', articles)
    },
  },
})
