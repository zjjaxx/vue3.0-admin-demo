
import {App} from "vue"
import * as VueRouter from "vue-router"
import basicRoutes from "./routes/basic"

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes:basicRoutes, // `routes: routes` 的缩写
    scrollBehavior: () => ({ left: 0, top: 0 }),
})
const installRouter=(app:App<Element>)=>{
    app.use(router)
}
export {installRouter}
export default router