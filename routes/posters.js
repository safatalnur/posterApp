var express = require('express');
var router = express.Router();
const postersController = require('../controllers/posters')

/* GET users listing. */
router.get('/new', postersController.new);

module.exports = router;
