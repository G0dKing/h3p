const express = require('express')
const fs = require('fs')
const router = express.Router()

router.post('/', (req, res) => {
    const { email } = req.body

    fs.appendFile('email-list.txt', email + '\n', (err) => {
        if (err) {
            console.error('Error storing submitted data:', err)
            res.status(500).send('Error storing submitted data')
        } else {
            console.log('Successfully stored data as:', email)
            res.sendStatus(200)
        }
    })
})

module.exports = router