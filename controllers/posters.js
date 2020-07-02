const Poster = require('../models/poster')

module.exports = {
    index,
    new: newPoster,
    create,
}

function newPoster(req, res) {
    res.render('posters/new', {title: 'Add Posters / Arts'})
}

function index(req,res) {
    Poster.find({}, function(err, posters) {
        res.render('posters/index', {title: 'All Posters / Arts', posters})
    })
}

function create(req, res) {
    const poster = new Poster({
        image:req.file.filename,
        title:req.body.title,
        description:req.body.description,
        artist:req.body.artist
    })
    poster.save(function(err) {
        //handle error
        if (err) return res.render('posters/new')
        console.log(poster)
        //redirect back to new.ejs
        res.redirect('/posters')

    })
}