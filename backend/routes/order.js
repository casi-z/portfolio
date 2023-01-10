const express = require('express')
const router = express.Router()

const controller = require('../controllers/order')

router.post('/send-code', controller.sendCode)
//router.post('/post-code', controller.login)

module.exports = router