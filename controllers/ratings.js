const Poster = require('../models/poster')

module.exports = {
    create
}

function create(req,res) {
    Poster.findById(req.params.id, function(err, poster) {
        poster.ratings.push(req.body)
        poster.save(function(err) {
            res.redirect(`/posters/${poster._id}`)
        })
    })
}