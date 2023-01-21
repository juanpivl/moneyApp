import { createApp } from 'vue'
import App from './App.vue'
import routerAuth from '../src/modules/authentication/router'

createApp(App).use(routerAuth).mount('#app')
