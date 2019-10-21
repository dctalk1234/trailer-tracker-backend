const express = require("express");
const router = express.Router();
const CategoryModel = require("../models/Category");

router.get("/", (req, res) => {
	CategoryModel.find({}).then(categories => {
		res.json(categories);
	});
});

router.get('/:id', (req,res) => {
    CategoryModel.findOne({_id: req.params.id}).populate('movies').exec((err, pop) => {
        console.log(pop);
        res.json(pop);
    })
})
module.exports = router;