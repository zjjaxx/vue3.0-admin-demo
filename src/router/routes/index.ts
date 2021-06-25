import * as VueRouter from "vue-router"
const routes:VueRouter.RouteRecordRaw[] = [

]
const routeModules=import.meta.globEager("./modules/**/*.ts")
Object.keys(routeModules).forEach(key => {
    let _routes=routeModules[key].default
    if(!(_routes instanceof Array)){
        _routes=[_routes]
    }
    routes.push(..._routes)
});

export {
    routes as asyncRoutes
}