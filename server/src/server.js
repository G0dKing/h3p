const express = require('express')
const config = require('./config/config')
const applyMiddlewares = require('./middleware/middleware')
const serveStaticFiles = require('./static/staticFiles')

const app = express()
app.set('trust proxy', 1)

applyMiddlewares(app)
serveStaticFiles(app)

app.listen(config.PORT, config.HOST, () => {
    console.log(`Server Listening: http://${config.HOST}:${config.PORT}`)
})
