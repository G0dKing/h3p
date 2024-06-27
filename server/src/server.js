const express = require('express');
const config = require('./hooks/config.js');
const applyMiddleware = require('./hooks/middleware.js');
const deployClient = require('./hooks/deploy.js');
const connectDB = require('./hooks/db.js');

const app = express();

app.set('trust proxy', 1);
applyMiddleware(app);
connectDB;
deployClient(app);

app.listen(config.PORT, config.HOST, () => {
    console.log(`Server Listening: http://${config.HOST}:${config.PORT}`)
})
