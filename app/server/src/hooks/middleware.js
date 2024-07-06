// middleware.js

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const limiter = require('express-rate-limit')

const rateLimit = limiter({
    windowMs: 15 * 60 * 1000,
    max: 100
})

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  credentials: true,
};

const applyMiddleware = (app) => {
    app.use(cors(corsOptions))
    app.use(helmet())
    app.use(express.json())
    app.use(rateLimit)
}

module.exports = applyMiddleware;
