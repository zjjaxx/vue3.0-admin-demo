import {App} from "vue"
import { createPinia } from 'pinia'
const installStore=(app:App<Element>)=>{
    app.use(createPinia())
}

export {
    installStore
}