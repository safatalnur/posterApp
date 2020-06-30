module.exports = {
    new: newPoster
}

function newPoster(req, res) {
    res.render('posters/new')
}