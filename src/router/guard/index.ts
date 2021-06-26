import type { Router } from "vue-router"
import routerInstance from "/@/router/index"
import {asyncRoutes} from "/@/router/routes/index"
import {roleFilter,flatRoutes} from "/@/router/utils"
const whiteList = ["/login", "/register"]
import { useUserStoreWithout } from "/@/store/modules/user"
const setPemissionRouterGuard =function (router: Router) {
    router.beforeEach((to, from, next) => {
        const useUserStore = useUserStoreWithout()
        if (whiteList.includes(to.path)) {
            next()
            return
        }
        const token = useUserStore.getToken
        if (!token) {
            if (to.meta.ignoreAuth) {
                next()
                return
            }
            else {
                next({
                    path: "/login", replace: true, query: {
                        redirect: to.path
                    }
                })
                return
            }
        }
        else {
            if(useUserStore.asyncRouterLoad){
                next()
                return
            }
            const roleList=useUserStore.getRoleList||[]
            const pemissionRoutes=roleFilter(asyncRoutes,roleList)
            const routes=flatRoutes(pemissionRoutes)
            routes.forEach(route=>{
                routerInstance.addRoute(route)
            })
            useUserStore.asyncRouterLoad=true
            //提示 请注意，添加路由并不会触发新的导航。也就是说，除非触发新的导航，否则不会显示所添加的路由。
            next({...to})
            return
        }
    })
}

export {
    setPemissionRouterGuard
}