var express = require('express');
var router = express.Router();
const postersController = require('../controllers/posters')
const multer = require('multer')
const path = require('path')
const notLoggedIn = require('./index')


//Saving uploaded images
const Storage = multer.diskStorage({
    destination:"./uploads",
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
router.post('/', upload, notLoggedIn, postersController.create)

//View all posters
router.get('/', notLoggedIn, postersController.index)

//View individual poster
router.get('/:id', upload, notLoggedIn, postersController.show)

//View and Edit individual posters
router.get('/edit/:id', upload, notLoggedIn, postersController.edit)
router.post('/edit/:id', upload, notLoggedIn, postersController.update)

//Delete individual poster
router.delete('/:id', notLoggedIn, postersController.deletePoster)

module.exports = router;
