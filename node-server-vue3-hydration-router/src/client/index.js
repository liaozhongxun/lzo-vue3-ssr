import { createApp } from "vue"
import App from '../App.vue'

let app = createApp(App)

import { createWebHashHistory } from "vue-router"
import createRouter from "../router/index"
let router = createRouter(createWebHashHistory())
app.use(router)

router.isReady().then(() => {
    app.mount("#app")
})
