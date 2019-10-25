const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie");
const axios = require("axios");

router.get("/", (req, res) => {
    MovieModel.find({}).then(movie => res.json(movie));
});

router.get("/:title", (req, res) => {
    MovieModel.findOne({ title: req.params.title }).then(movie => {
        res.json(movie);
    });
});

router.delete("/:title", (req, res) => {
    MovieModel.findOneAndDelete({ title: req.params.title }).then(() => {
        res.redirect("/Movie");
    });
});
router.get("/search/:name", (req, res) => {
    axios.get(`http://www.omdbapi.com/?apikey=ef42ea14&s=${req.params.name}`).then(movie => {
        res.json(movie.data);
    });
});

router.get("/new/:title", (req, res) => {
    axios.get(`http://www.omdbapi.com/?apikey=ef42ea14&t=${req.params.title}`).then(movie => {
        MovieModel.create({
            title: movie.data.Title,
            genre: movie.data.Genre,
            poster: movie.data.Poster,
            releaseYear: movie.data.Year
        }).then(newMovie => {
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.params.title}Trailer&maxResults=1&key=AIzaSyC5tmdbvhs7dgZmTLSBxU754JgctKGrs68`).then(apiRes => {
                console.log(apiRes.data.items[0].id.videoId);

                newMovie.trailer = `https://www.youtube.com/embed/${apiRes.data.items[0].id.videoId}`;
                newMovie.save();

                res.json(newMovie);
            });
        });
    });
});

module.exports = router;