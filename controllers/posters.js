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
        res.render('posters/index', { title: 'All Posters/Arts', posters})
    })
}

function show(req,res) {
    const file = req.file
    console.log('File>>>>>>>', file)
    Poster.findById(req.params.id, function(err, poster) {
        
        res.render('posters/show', { title: 'Poster/Art Details', poster})
    })
}

function edit(req,res) {
    console.log('pARAMS: ', req.params.id)
    Poster.findById(req.params.id, function(err, poster) {
        console.log(poster)
        res.render('posters/edit', {title: 'Edit Poster', poster})
    })
}

function update(req,res) {
    console.log(req.params)
    Poster.findById(req.params.id).exec((err, result) => {
        if (err) throw err;
        Poster.findByIdAndUpdate(req.params.id, {
            image: req.file !== undefined ? req.file.filename : result.image,
            title: req.body.title !== '' ? req.body.title : result.title,
            description: req.body.description !== '' ? req.body.description : result.description,
            artist:req.body.artist !== '' ? req.body.artist : result.artist
        }, {new: true}, function(err, poster) {
            if (err) throw err;
            console.log('Poster', poster)
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
    console.log('PARAMS: >>', req.params);
    Poster.deleteOne({_id: req.params.id}, function(err, poster) {
        res.redirect('/posters')
    })
}