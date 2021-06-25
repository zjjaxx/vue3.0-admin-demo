import type { Router } from "vue-router"
import {asyncRoutes} from "/@/router/routes/index"
import {roleFilter} from "/@/router/utils"
const whiteList = ["/login", "/register"]
import { useUserStoreWithout } from "/@/store/modules/user"
const setPemissionRouterGuard = function (router: Router) {
    router.beforeEach((to, from, next) => {
        console.log("to is", to, "from is", from)
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
            const roleList=useUserStore.getRoleList||[]
            const pemissionRoutes=roleFilter(asyncRoutes,roleList)
            console.log("pemissionRoutes is",pemissionRoutes)
        }
    })
}

export {
    setPemissionRouterGuard
}