import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'



import authRouter from '../modules/authentication/router'
import moneyRouter from '../modules/money_app/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/authentication',
    ...authRouter,
  },
  {
    path: '/money',
    ...moneyRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
