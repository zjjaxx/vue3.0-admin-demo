import {RouteRecordRaw} from "vue-router"

const routes:RouteRecordRaw[]=[{
    component:()=>import("/@/view/register/index.vue"),
    path:"/register"
}]

export default routes