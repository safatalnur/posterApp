var express = require('express');
const passport = require('passport');
var router = express.Router();

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
))

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/posters',
        failureRedirect: '/posters'
    }
))

router.get('/logout', function(req,res){
    req.logout()
    res.redirect('/posters')
})