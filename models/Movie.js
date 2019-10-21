const mongoose = require("../db/connection");

const movieschema = new mongoose.Schema({
    title: String,
    trailer: String,
    genre: [String],
    poster: String,
    releaseYear: Number


})

const MovieModel = mongoose.model("MovieModel", movieschema);

module.exports = MovieModel;
