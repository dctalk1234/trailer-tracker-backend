const mongoose = require("../app/db/connection");

const movieschema = new mongoose.Schema({
    title: "String",
    trailer: "String",
    genre: "String",
    poster: "String",
    releaseYear: "String"


})

const MovieModel = mongoose.model("MovieModel", movieschema);

module.exports = MovieModel;
