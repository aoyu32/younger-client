import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import('@/views/layout/Layout.vue'),
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        name: 'app',
        path: '/app',
        component: () => import('@/views/home/Home.vue')
      },
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
