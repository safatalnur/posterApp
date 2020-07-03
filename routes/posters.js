var express = require('express');
var router = express.Router();
const postersController = require('../controllers/posters')
const multer = require('multer')
const path = require('path')

//Saving uploaded images
const Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename: (req,file,cb)=> {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: Storage
}).single('myImage')

/* GET new Poster/Art */
router.get('/new', postersController.new);

// POST new Poster/Art
router.post('/', upload, postersController.create)

//View all posters
router.get('/', postersController.index)

//View individual posters
router.get('/:id', postersController.show)

module.exports = router;
