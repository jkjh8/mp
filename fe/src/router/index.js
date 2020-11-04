import Vue from 'vue'
import VueRouter from 'vue-router'
import Playlist from '../views/Playlist.vue'
import Files from '../views/Files.vue'
import Player from '../views/Player.vue'
import IPAddr from '../views/IPAddr.vue'
import About from '../views/About.vue'
import LoginPage from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = () => (from, to, next) => {
  console.log(store.state.user)
  if (store.state.user) return next()
  next('/login')
}

const routes = [
  {
    path: '/',
    name: '/',
    component: Playlist
    // beforeEnter: requireAuth()
  },
  {
    path: '/home',
    name: 'Home',
    component: Playlist,
    beforeEnter: requireAuth()
  },
  {
    path: '/files',
    name: 'Files',
    component: Files,
    beforeEnter: requireAuth()
  },
  {
    path: '/player',
    name: 'Player',
    component: Player,
    beforeEnter: requireAuth()
  },
  {
    path: '/ipaddr',
    name: 'IPAddr',
    component: IPAddr,
    beforeEnter: requireAuth()
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
