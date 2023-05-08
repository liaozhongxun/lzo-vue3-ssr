let express = require('express')
let server = express()

import createApp from '../app'
import { renderToString } from '@vue/server-renderer'


server.get('/', async (req, res) => {
    let app = createApp() // 拿到app.js 返回的函数的app实例
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
            ${appStringHtml}
        </body>
    </html>
    `)
})

server.listen("3001", () => {
    console.log("start node server 3001")
})