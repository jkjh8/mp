import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/api'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
