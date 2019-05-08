import Vue from 'vue'
import Home from './Home.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home),
}).$mount('#app')
