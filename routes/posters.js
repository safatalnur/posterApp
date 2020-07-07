var express = require('express');
var router = express.Router();
const postersController = require('../controllers/posters')
const multer = require('multer')
const path = require('path')


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
router.post('/', upload, postersController.create)

//View all posters
router.get('/', postersController.index)

//View individual poster
router.get('/:id', upload, postersController.show)

//View and Edit individual posters
router.get('/edit/:id', upload, postersController.edit)
router.post('/edit/:id', upload, postersController.update)

//Delete individual poster
router.delete('/:id', postersController.deletePoster)

module.exports = router;
