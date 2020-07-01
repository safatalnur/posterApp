var express = require('express');
var router = express.Router();
const postersController = require('../controllers/posters')

/* GET new Poster/Art */
router.get('/new', postersController.new);

// POST new Poster/Art
router.post('/', postersController.create)

//View all posters
router.get('/', postersController.index)

module.exports = router;
