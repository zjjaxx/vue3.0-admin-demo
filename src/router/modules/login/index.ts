import {RouteRecordRaw} from "vue-router"

const routes:RouteRecordRaw[]=[{
    component:()=>import("/@/view/login/index.vue"),
    path:"/login"
}]

export default routes