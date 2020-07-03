const Poster = require('../../models/poster')

module.exports = {
    index,
    show,
    create,
}

function show(req,res) {
    Poster.findById(req.params.id).then(function(poster) {
        res.status(200).json(poster)
    })
}

function create(req,res) {
    Poster.create(req.body).then(function (poster) {
        res.status(201).json(poster)
    })
    // Poster.create(req.file).then(function (poster) {
    //     res.status(201).json(poster)
    // })
}

function index(req,res) {
    Poster.find({}).then(function (posters) {
        res.status(200).json(posters)
    })
}