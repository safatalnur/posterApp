const Poster = require('../models/poster')
var path = require('path');
const { nextTick } = require('process');



module.exports = {
    index,
    new: newPoster,
    create,
    show,
    edit,
    update,
    deletePoster,
}

function newPoster(req, res) {
    res.render('posters/new', {title: 'Add Posters / Arts'})
}

function index(req,res) {
    Poster.find({}, function(err, posters) {
        res.render('posters/index', {posters})
    })
}

function show(req,res) {
    const file = req.file
    console.log('File>>>>>>>', file)
    Poster.findById(req.params.id, function(err, poster) {
        
        res.render('posters/show', { poster})
    })
}

function edit(req,res) {
    Poster.findById(req.param.id, function(err, poster) {
        res.render('posters/edit', {title: 'Edit Poster', poster})
    })
}

function update(req,res) {
    Poster.findById(req.param.id, function(err, poster) {
        Poster.replaceOne(req.param.id, function(err, update) {
            res.redirect('/posters')
        })
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

function deletePoster(req,res) {
    Poster.deleteOne(req.param.id, function(err, poster) {
        res.redirect('/posters')
    })
}