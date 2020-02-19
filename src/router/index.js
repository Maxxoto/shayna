import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Header from '../components/Header.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  }
]

const router = new VueRouter({
  routes
})

export default router
