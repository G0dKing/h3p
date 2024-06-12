const express = require('express')
const config = require('./config/config')
const applyMiddlewares = require('./middleware/middleware')
const serveStaticFiles = require('./static/staticFiles')
const emailSubmit = require('./routes/emailSubmitRoute.js')
const connectDB = require('./config/db.js')

const app = express()
app.set('trust proxy', 1)
applyMiddlewares(app)

connectDB();

app.use('/submit', emailSubmit)

serveStaticFiles(app)

app.listen(config.PORT, config.HOST, () => {
    console.log(`Server Listening: http://${config.HOST}:${config.PORT}`)
})
