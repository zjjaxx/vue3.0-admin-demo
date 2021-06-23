import {RouteRecordRaw} from "vue-router"

const dashboardRoute:RouteRecordRaw={
    path:"/dashboard",
    component:()=>import("/@/layout/default/index.vue"),
    redirect:"/dashboard/analysis",
    children:[{
        path:"analysis",
        component:()=>import("/@/view/dashboard/analysis.vue")
    }]
}

export default dashboardRoute