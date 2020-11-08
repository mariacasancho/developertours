import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Hotel from '../views/Hotel.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotel/:id',
    name: 'Hotel',
    component: Hotel
  }
]

const router = new VueRouter({
  routes
})

export default router
