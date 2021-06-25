import { RouteRecordRaw } from "vue-router"

const basicRoutes: RouteRecordRaw[] = [{
    path: "/",
    redirect: "/dashboard",
    meta: {
        title: 'Root',
    },
}, {
    component: () => import("/@/view/login/index.vue"),
    path: "/login",
    meta:{
        title: "login",
    }
}, {
    component: () => import("/@/view/register/index.vue"),
    path: "/register",
    meta:{
        title: "register",
    }
},{
    component:()=>import("/@/view/mainOut/index.vue"),
    path:"/mainout",
    meta:{
        ignoreAuth: true
    }
}]

export default basicRoutes