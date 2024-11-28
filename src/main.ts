import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { App, router } from './app'
import './shared/assets/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
