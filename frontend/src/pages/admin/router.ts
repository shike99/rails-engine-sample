import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/admin/Home.vue'
import Users from '@/containers/admin/Users.vue'
import UserDetail from '@/components/admin/UserDetail.vue'
import EditUser from '@/components/admin/EditUser.vue'
import Articles from '@/containers/admin/Articles.vue'
import NewArticle from '@/components/admin/NewArticle.vue'
import EditArticle from '@/components/admin/EditArticle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'home',
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
      path: '/admin/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/admin/users/:id',
      name: 'userDetail',
      component: UserDetail,
    },
    {
      path: '/admin/users/:id/edit',
      name: 'editUser',
      component: EditUser,
    },
    {
      path: '/admin/articles',
      name: 'articles',
      component: Articles,
    },
    {
      path: '/admin/articles/new',
      name: 'newArticle',
      component: NewArticle,
    },
    {
      path: '/admin/articles/:id/edit',
      name: 'editArticle',
      component: EditArticle,
    },
  ],
})
