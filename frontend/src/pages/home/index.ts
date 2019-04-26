import Vue from 'vue'
import Vuesax from 'vuesax'
// import axios, { AxiosResponse, AxiosError } from 'axios'
import Home from './Home.vue'
import router from './router'
import store from './store'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Vuesax)
Vue.config.productionTip = false

// const http = axios.create()

// // This first fat arrow function defines a callback invoked after any SUCCESSFUL request.
// // This is where we check if the backend included an `access-token` header.
// http.interceptors.response.use(
//   (response: AxiosResponse): AxiosResponse => {
//     if (response.headers['access-token']) {
//       // Commits the relevant headers to the store, calling mutation `auth`.
//       const responseHeaders = response.headers
//       // ["access-token","client","expiry","uid","token-type"]
//       store.commit('setAuth', )

//       const session = vueCookie.get('session')

//       // Stores the tokens in a cookie called `session` too. Cookie values are strings, so have to
//       // serialize it to JSON.
//       //
//       // The object we are storing in session looks like this:
//       // {'tokens': {'access-token': 'foo', ...}, 'user': {'email': 'foo@bar.com', ...}}
//       // so that is why we are extracting and modifying, so that the `user` key isn't blown away.
//       if (session) {
//         const session = JSON.parse(session)
//         session['tokens'] = authHeaders

//         vueCookie.set('session', JSON.stringify(session), { expires: '14D' })
//       }
//     }

//     return response
//   },
//   (error: AxiosError):  => {
//     // This second fat arrow function defines a callback invoked after any FAILED request.
//     // This handles every case when the server responds with a 403 / unauthorized. That means
//     // we need to redirect the user to the SignIn component.
//     if (router.currentRoute.name !== 'signin' && error.response.status === status.UNAUTHORIZED) {
//       store.commit('user', null)
//       router.push({ name: 'signin' })
//     }

//     return Promise.reject(error)
//   }
// )

// Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(Home),
}).$mount('#app')
