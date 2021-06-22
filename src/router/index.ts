
import Home from "../view/home.vue"
import * as VueRouter from "vue-router"
const routes:VueRouter.RouteRecordRaw[] = [
    { path: '/', component: Home},
]
const routeModules=import.meta.globEager("./modules/**/*.ts")
Object.keys(routeModules).forEach(key => {
    let _routes=routeModules[key].default
    if(!(_routes instanceof Array)){
        _routes=[_routes]
    }
    routes.push(...routeModules[key].default)
});
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router