export default{
    name: 'money',
    component: () => import(/* webpackChunkName: "money" */ '@/modules/money_app/layout/moneyAppLayout.vue'),
    children: [
        {
            path: '',
            name: 'inicio',
            component: () => import(/* webpackChunkName: "money-inicio" */ '@/modules/money_app/views/InicioView.vue'),
        },
        {
            path: '/otro',
            name: 'otro',
            component: () => import(/* webpackChunkName: "money-otro" */ '@/modules/money_app/views/OtroView.vue'),
        },
        
        
    ]
}