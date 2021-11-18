import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () => import('../views/indexPage.vue')
  }, {
    path: '/travelList',
    name: 'TravelList',
    component: () => import('../views/travelList.vue')
  }, {
    path: '/social',
    name: 'Social',
    component: () => import('../views/social.vue')
  }, {
    path: '/attractions',
    name: 'Attractions',
    component: () => import('../views/attractions.vue')
  }, {
    path: '/recent',
    name: 'recent',
    component: () => import('../views/recent.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
