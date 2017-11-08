const jsonServer = require('json-server')
const API = require('../api')
const router = jsonServer.create()

// ProfileController
router.get('/profiles/:id', API.ProfileController.index)
router.put('/profiles', API.ProfileController.update)

// FeedController
router.get('/feeds', API.FeedController.index)

module.exports = router
