const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/poster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})