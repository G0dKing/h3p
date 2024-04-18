require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const config = require('./config/config')
const applyMiddlewares = require('./middleware/middleware')
const serveStaticFiles = require('./static/staticFiles')
const userRoutes = require('./routes/userRoutes')

const app = express()

connectDB()

applyMiddlewares(app)
app.use('/users', userRoutes)
serveStaticFiles(app)

app.listen(config.PORT, config.HOST, () => {
    console.log(`Server Listening: http://${config.HOST}:${config.PORT}`)
})