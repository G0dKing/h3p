const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/register', async (req, res) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.name) {
            return res.status(400).send({ message: 'Missing required fields' });
        }
        const user = new User(req.body)
        await user.save()
        res.status(201).send({ user: user, message: 'Registration successful.' })
    } catch (error) {
        console.error('User creation failed:', error)
        res.status(400).send({ message: 'The registration process has failed.' })
    }
})

router.get('/status', (req, res) => {
    res.status(200).send({ status: 'OK' })
})

module.exports = router
