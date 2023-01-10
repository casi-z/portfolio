const express = require('express')
const router = express.Router()

const controller = require('../controllers/main')

router.post('/', controller.posts)
router.get('/posts-length', controller.postsLength)

module.exports = router