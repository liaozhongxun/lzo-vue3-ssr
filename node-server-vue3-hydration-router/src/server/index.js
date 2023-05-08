let express = require('express')
let server = express()

import createApp from '../app'
import { renderToString } from '@vue/server-renderer'
import createRouter from '../router/index'
import { createMemoryHistory } from 'vue-router' // node 中使用的内存路由

// 静态部署 build，用的 /client/client_bundle.js 时区 build下找
server.use(express.static("build"))

server.get('/', async (req, res) => {
    // 拿到app.js 返回的函数的app实例
    let app = createApp()

    // 服务安装路由插件
    let router = createRouter(createMemoryHistory())
    app.use(router)
    await router.push(req.url || '/'); // 等待页面跳转好，服务器才知道要渲染那个路由页面给用户
    await router.isReady() // 等待异步路由加载完成再渲染

    let appStringHtml = await renderToString(app)
    res.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div id='app'>
                ${appStringHtml}
            </div>
            <script src='/client/client_bundle.js'></script>
        </body>
    </html>
    `)
})

server.listen("3001", () => {
    console.log("start node server 3001")
})