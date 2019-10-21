const express = require("express");
const router = express.Router();
const CategoryModel = require("../models/Category");

router.get("/", (req, res) => {
    CategoryModel.find({}).then(categories => {
        res.json(categories);
    });
});

router.get('/:title', (req, res) => {
    CategoryModel.findOne({ title: req.params.title }).populate('movies').exec((err, pop) => {
        res.json(pop);
    })
})

router.put('/:title', (req, res) => {
    CategoryModel.findOneAndUpdate({ title: req.params.title }, req.body).then(() => {
        res.redirect('/');
    })
})

router.post('/', (req, res) => {
    CategoryModel.create(req.body).then(newCategory => {
        res.redirect(`/category/${newCategory.title}`);
    })
})




router.delete("/:title", (req, res) => {
    CategoryModel.findOneAndDelete({ title: req.params.title }).then(category => {
        res.redirect("/");
    });
});


router.put('/:title', (req, res) => {
    CategoryModel.findOneAndUpdate({ title: req.params.title }, req.body, { new: true })
        .then(category => {
            res.redirect("/");
        })
});

module.exports = router;