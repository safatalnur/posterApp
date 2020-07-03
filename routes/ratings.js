var express = require('express')
var router = express.Router()
const ratingsController = require('../controllers/ratings')

router.post('/posters/:id/ratings', ratingsController.create)

module.exports = router
