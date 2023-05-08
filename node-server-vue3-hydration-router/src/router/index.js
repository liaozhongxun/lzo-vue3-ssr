import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import("../view/home.vue")
    },
    {
        path: '/about',
        component: () => import("../view/about.vue")
    }
]

export default function (history) { // 返回一个函数
    return createRouter({
        history, // 模式在SSR和SPA使用的是不一样的，需要早服务端和客户端分别使用
        routes
    })
}