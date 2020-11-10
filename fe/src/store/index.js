import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import user from './user/index.js'
import filelist from './filelist/index.js'
import playlist from './playlist/index.js'

axios.defaults.baseURL = 'http://' + window.location.hostname + ':3000/api'
axios.defaults.withCredentials = true

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      filelist,
      playlist
    },
    // strict: process.env.DEBUGGING
    strict: false
  })

  return Store
}
