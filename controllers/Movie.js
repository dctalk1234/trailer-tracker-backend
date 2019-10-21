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

// router.get("/", (req, res) => {
//     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=ef42ea14').then((res) => {
//         console.log(res)
//         // return res
//     }).catch(err => { console.log(err) })

// });

router.get("/search/:name", (req, res) => {
	axios.get(`http://www.omdbapi.com/?apikey=ef42ea14&t=${req.params.name}`).then(movie => {
		res.json(movie.data);
	});
});

// router.post("/:name", (req, res) => {
//     CheerUpModel.findOne({ name: req.body.name }).then(myInstance => res.render('show', { myInstance }));
//   });

module.exports = router;
