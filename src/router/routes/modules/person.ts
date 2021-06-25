import type {RouteRecordRaw} from "vue-router"

const routes:RouteRecordRaw[]=[{
    path:"/person",
    redirect:"/person/info/detail",
    component:()=>import("/@/view/personal/index.vue"),
    children:[
        {
            path:"info",
            component:()=>import("/@/view/personal/info.vue"),
            children:[
                {
                    path:"detail",
                    component:()=>import("/@/view/personal/detail.vue"),
                }
            ]
        }
    ]
}]

export default routes