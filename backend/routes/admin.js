const express = require('express')
const router = express.Router()

const controller = require('../controllers/admin')

router.get('/adffd-post', controller.addPost)

module.exports = router