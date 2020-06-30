const mongoose = require('mongoose')

const Schema = mongoose.Schema

const posterSchema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    votesUp: [],
    votesDown: []
}, {
    timestamps: true
})

module.exports = mongoose.model('Poster', posterSchema)