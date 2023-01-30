const express = require('express')
const router = express.Router()

const controller = require('../controllers/admin')

router.post('/add--post', controller.setPost)

module.exports = router