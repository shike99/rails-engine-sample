import Vue from 'vue'
import Router from 'vue-router'
import Admin from './Admin.vue'
import UserList from './UserList.vue'
import ArticleList from './ArticleList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin,
    },
    // {
    //   path: '/users',
    //   name: 'users',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // webpackChunkName: "about"
    //   component: () => import('./UserList.vue'),
    // },
    {
      path: '/users',
      name: 'users',
      component: UserList,
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleList,
    },
  ],
})
