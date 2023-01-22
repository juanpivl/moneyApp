import { createApp } from 'vue'
import App from './App.vue'
import routerAuth from '../src/modules/authentication/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(vuetify).use(routerAuth).mount('#app')
