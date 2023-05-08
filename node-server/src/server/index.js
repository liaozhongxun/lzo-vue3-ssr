let express = require('express')

let server = express()

server.get('/', (req, res) => {
    res.send(`hello server 123444`)
})

server.listen("3001", () => {
    console.log("start node server 3001")
})