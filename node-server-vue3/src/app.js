import { createSSRApp } from 'vue'

import App from './App.vue'

// 通过函数返回APP实例，保证每个请求都会返回一个新的app实例，避免夸请求状态的污染
// 传统SPA页面，每个用户都是在自己电脑上创建实例，只会存在一个App实例，一个store，一个路由等，每次访问都会重新初始化，也是一种单例模式
// SSR环境，App应用模块通常只在 服务器启动时 初始化一次，用户A的东西会被用户B读取，尝试状态污染
export default function createApp() {
    return createSSRApp(App)
}
