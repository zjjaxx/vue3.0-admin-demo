import type {RouteRecordRaw} from "vue-router"
const roleFilter=(routes:RouteRecordRaw[],roleList:string[])=>{
   const _routes= routes.filter(route=>{
        if(route.children?.length){
          const children= roleFilter(route.children,roleList)
          route.children=children
        }
        if(!route.meta?.role){
            return true
        }
        else{
            return roleList.includes(route.meta!.role as string)
        }
    })
    return _routes
}

export {
    roleFilter
}