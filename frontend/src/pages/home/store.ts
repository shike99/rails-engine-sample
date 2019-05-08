import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/plugins/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    auth: {},
    articles: [],
    article: {},
  },
  getters: {
    user: state => state.user,
    articles: state => state.articles,
    article: state => state.article,
  },
  mutations: {
    setUser(state, user): void {
      state.user = user
    },
    setAuth(state, auth): void {
      state.auth = auth
    },
    setArticles(state, articles): void {
      state.articles = articles
    },
    setArticle(state, article): void {
      state.article = article
    },
  },
  actions: {
    async fetchArticles({ commit }): Promise<void> {
      const articles = (await http.get('/api/articles')).data
      commit('setArticles', articles)
    },
    async fetchArticle({ commit }, id: number): Promise<void> {
      const article = (await http.get(`/api/articles/${id}`)).data
      commit('setArticle', article)
    },
  },
})
