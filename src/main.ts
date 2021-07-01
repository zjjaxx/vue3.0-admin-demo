import { createApp } from 'vue'
import App from './App.vue'
import router,{installRouter} from "./router/index"
import {setPemissionRouterGuard} from "./router/guard/index"
import {installStore} from "./store/index"

import "./assets/style/global.less"
const app=createApp(App)
installRouter(app)
setPemissionRouterGuard(router)
installStore(app)
app.mount('#app')

