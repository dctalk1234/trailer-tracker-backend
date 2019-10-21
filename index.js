const express = require('express')
const app = express();
const mongoose = require('mongoose')
const movieController = require("./controllers/Movie");
const categoryController = require("./controllers/Category");
const parser = require("body-parser");
const methodOverride = require("method-override");

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(methodOverride("_method"))


app.get("/", (req, res) => {
    res.redirect("/Category");
});

// app.use("/Category/", categoryController);
// app.use("/Movie/", movieController);

app.use('/public', express.static('public'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});