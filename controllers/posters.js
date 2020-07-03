const Poster = require('../models/poster')

module.exports = {
    index,
    new: newPoster,
    create,
    show
}

function newPoster(req, res) {
    res.render('posters/new', {title: 'Add Posters / Arts'})
}

function index(req,res) {
    Poster.find({}, function(err, posters) {
        res.render('posters/index', {title: 'All Posters / Arts', posters})
    })
}

function show(req,res) {
    Poster.findById(req.params.id, function(err, poster) {
        res.render('posters/show', {title: 'Poster Detail', poster})
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