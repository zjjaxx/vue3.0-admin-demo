import { RouteRecordRaw } from "vue-router"
import { cloneDeep } from "lodash"
const roleFilter = (routes: RouteRecordRaw[], roleList: string[]) => {
    const _routes = routes.filter(route => {
        if (route.children?.length) {
            const children = roleFilter(route.children, roleList)
            route.children = children
        }
        if (!route.meta?.role) {
            return true
        }
        else {
            return roleList.includes(route.meta!.role as string)
        }
    })
    return _routes
}
const flatRoutes = (pemissionRoutes: RouteRecordRaw[]): RouteRecordRaw[] => {
    const _pemissionRoutes = cloneDeep(pemissionRoutes)
    _pemissionRoutes.forEach(route => {
        if (route.children) {
            mapPath(route.children,`${route.path}`)
            execFlat(route.children,route.children)
        }
    })
    return _pemissionRoutes
}
const mapPath=(children: RouteRecordRaw[],rootPath:string):void=>{
    children.forEach(_child => {
        _child.path=`${rootPath}/${_child.path}`
        if(_child.children){
            mapPath(_child.children,_child.path)
        }
    })
}
const execFlat=(children: RouteRecordRaw[],originChild:RouteRecordRaw[]):void=>{
    children.forEach(_child => {
        if(_child.children){
            originChild.push(..._child.children)
            execFlat(_child.children,originChild)
            _child.children=[]
        }
    })
}
export {
    roleFilter,
    flatRoutes
}