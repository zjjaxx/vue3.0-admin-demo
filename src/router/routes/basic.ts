import { RouteRecordRaw } from "vue-router"

const basicRoutes: RouteRecordRaw[] = [{
    path: "/",
    redirect: "/dashboard",
    meta: {
        title: 'Root',
    },
}, {
    component: () => import("/@/view/login/index.vue"),
    path: "/login"
}, {
    component: () => import("/@/view/register/index.vue"),
    path: "/register"
}]

export default basicRoutes