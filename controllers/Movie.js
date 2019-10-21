const express = require("express")
const router = express.Router();
const MovieModel = require("../models/Movie");


router.get("/movie", (req, res) => {
    // MovieModel.find({}).then(movie => res.render('index', { movie }))
    res.send("hi")
});


module.exports = router;
