


export default {

  name: 'authLayout',
  component: () => import(/* webpackChunkName: "auth layout" */ '@/modules/authentication/layout/AuthLayout.vue'),
  children: [
    {
      path: '',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/modules/authentication/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ '@/modules/authentication/views/RegisterView.vue'),
    },
  
   
  ]

}