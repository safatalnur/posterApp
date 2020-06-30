const mongoose = require('mongoose')

const Schema = mongoose.Schema

const posterSchema = new Schema({
    imageURL: String,
    title: String,
    description: String,
    votesUp: [],
    votesDown: []
}, {
    timestamps: true
})

module.exports = mongoose.model('Poster', posterSchema)