import {App} from "vue"
import { createPinia } from 'pinia'
const store=createPinia()
const installStore=(app:App<Element>)=>{
    app.use(store)
}

export {
    installStore
}
export default store