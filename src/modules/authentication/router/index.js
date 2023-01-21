import { createRouter, createWebHashHistory } from 'vue-router'
import AuthLayout from '../layout/AuthLayout.vue'
import moneyRouter from '@/modules/money_app/router'

const routes = [
  {
    path: '/',
    name: 'AuthLayout',
    component: AuthLayout
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/money',
    ...moneyRouter
  }
]

const routerAuth = createRouter({
  history: createWebHashHistory(),
  routes
})

export default routerAuth
