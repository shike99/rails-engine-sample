import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/plugins/http'
import { Auth } from '@/types/session'
import { User } from '@/types/user'
import { Article } from '@/types/article'

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
    setUser(state, user: User): void {
      state.user = user
    },
    setAuth(state, auth: Auth): void {
      state.auth = auth
    },
    setArticles(state, articles): void {
      state.articles = articles
    },
    setArticle(state, article: Article): void {
      state.article = article
    },
  },
  actions: {
    async fetchArticles({ commit }): Promise<void> {
      const articles: Article[] = (await http.get('/api/articles')).data
      commit('setArticles', articles)
    },
    async fetchArticle({ commit }, id: number): Promise<void> {
      const article: Article = (await http.get(`/api/articles/${id}`)).data
      commit('setArticle', article)
    },
  },
})
