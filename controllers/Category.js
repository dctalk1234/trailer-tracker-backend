const express = require("express");
const router = express.Router();
const CategoryModel = require("../models/Category");

router.get("/", (req, res) => {
	CategoryModel.find({}).then(categories => {
		res.json(categories);
	});
});

router.get('/:title', (req,res) => {
    CategoryModel.findOne({title: req.params.title}).populate('movies').exec((err, pop) => {
        res.json(pop);
    })
})
module.exports = router;