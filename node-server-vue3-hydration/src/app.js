import { createSSRApp } from 'vue'

import App from './App.vue'

// 通过函数返回APP实例，保证每个请求都会返回一个新的app实例，避免夸请求状态的污染
export default function createApp() {
    return createSSRApp(App)
}
