const express = require('express')
const router = express.Router()
const postController = require('../controllers/api/posters')

// GET /api/posters
router.get('/posters', postController.index)
router.get('/posters/:id', postController.show)
router.post('/posters', postController.create)

module.exports= router