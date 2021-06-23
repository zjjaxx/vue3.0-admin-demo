import { createApp } from 'vue'
import App from './App.vue'
import {installRouter} from "./router/index"
import {installStore} from "./store/index"
const app=createApp(App)
installRouter(app)
installStore(app)
app.mount('#app')
