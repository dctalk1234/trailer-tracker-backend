const express = require("express")
const router = express.Router();
const MovieModel = require("../models/Movie");
const axios = require('axios')



// router.get("/:name", (req, res) => {
//     MovieModel.find({}).then(movie => res.render('index', { movie }))
// });


// router.get("/:name", (req, res) => {
//     MovieModel.findOne({ name: req.params.name })
//         // .then(myInstance => res.render('show', { myInstance }));
//         .then(res.send(`hi from ${req.params.name}`));



// });




// router.get("/", (req, res) => {
//     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=ef42ea14').then((res) => {
//         console.log(res)
//         // return res
//     }).catch(err => { console.log(err) })

// });

router.get("/:name", (req, res) => {
    axios.get(`"http://www.omdbapi.com/?t=${{ name: req.params.name }}&apikey=ef42ea14"`).then((res) => {
        console.log(res)
        // return res
    }).catch(err => { console.log(err) })

});






// router.post("/:name", (req, res) => {
//     CheerUpModel.findOne({ name: req.body.name }).then(myInstance => res.render('show', { myInstance }));
//   });

module.exports = router;
