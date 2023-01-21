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
    path: '/money',
    ...moneyRouter
  }
]

const routerAuth = createRouter({
  history: createWebHashHistory(),
  routes
})

export default routerAuth
