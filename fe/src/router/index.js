import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import IndexPage from '@/components/indexPage'
import LoginPage from '@/components/LoginPage'
import store from '../store'
Vue.use(VueRouter)

const requireAuth = () => (from, to, next) => {
  if (store.getters.user) return next()
  next('/')
}

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: requireAuth()
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
