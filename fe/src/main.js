import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)
axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/api'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
