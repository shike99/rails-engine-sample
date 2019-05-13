import Vue from 'vue'
import Admin from './Admin.vue'
import router from '@/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Admin),
}).$mount('#app')
