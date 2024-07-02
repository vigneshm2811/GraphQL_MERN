const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: String, required: true }
})


module.exports = new mongoose.model('mongoMovieModel', mongoSchema)