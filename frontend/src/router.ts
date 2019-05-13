import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import AdminHome from '@/components/admin/Home.vue'
import AdminUsers from '@/containers/admin/Users.vue'
import AdminUserDetail from '@/components/admin/UserDetail.vue'
import AdminEditUser from '@/components/admin/EditUser.vue'
import AdminArticles from '@/containers/admin/Articles.vue'
import AdminNewArticle from '@/components/admin/NewArticle.vue'
import AdminEditArticle from '@/components/admin/EditArticle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArticleList,
    },
    {
      path: '/articles/:id',
      name: 'article-detail',
      component: ArticleDetail,
    },
    {
      path: '/sign_in',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/sign_up',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/admin',
      name: 'admin-home',
      component: AdminHome,
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: AdminUsers,
    },
    {
      path: '/admin/users/:id',
      name: 'admin-user-detail',
      component: AdminUserDetail,
    },
    {
      path: '/admin/users/:id/edit',
      name: 'admin-edit-user',
      component: AdminEditUser,
    },
    {
      path: '/admin/articles',
      name: 'admin-articles',
      component: AdminArticles,
    },
    {
      path: '/admin/articles/new',
      name: 'admin-new-article',
      component: AdminNewArticle,
    },
    {
      path: '/admin/articles/:id/edit',
      name: 'admin-edit-article',
      component: AdminEditArticle,
    },
  ],
})
