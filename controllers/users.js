const User = require('../models/user')

module.exports= {
    index
}

function index(req, res, next) {
    console.log('user index>>>>>>>>>>>>>>>>>', req.query)
    res.render('index', {
        user: req.user,
        title: 'Create and Submit Your Own Poster/Art' 
    })
}