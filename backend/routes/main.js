const express = require('express')
const router = express.Router()

const controller = require('../controllers/main')

router.post('/', controller.posts)
router.post('/add-watcher', controller.addWatcher)
router.get('/posts-length', controller.postsLength)
router.get('/watchers', controller.getWatchers)
router.post('/add-post', controller.addPost)
module.exports = router