const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ratingSchema = new Schema({
    content: {type: String},
    rating: {type: Number, min: 1, max: 5, default: 1}
}, {
    timestamps: true
})

const posterSchema = new Schema({
    image: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    artist: {type: String, required: true},
    ratings: [ratingSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Poster', posterSchema)