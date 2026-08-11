import ui from '@nuxt/ui/vue-plugin'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(ui).use(router).use(pinia).mount('#app')
