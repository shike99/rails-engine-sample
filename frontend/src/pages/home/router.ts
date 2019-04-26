import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import ArticleDetail from './ArticleDetail.vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
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
      path: '/articles/:id',
      component: ArticleDetail,
    },
    {
      path: '/sign_in',
      component: SignIn,
    },
    {
      path: '/sign_up',
      component: SignUp,
    },
  ],
})
