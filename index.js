const express = require('express')
const app = express();
const movieController = require("./controllers/Movie");
const categoryController = require("./controllers/Category");
const parser = require("body-parser");
const methodOverride = require("method-override");
const cors = require('cors');




// app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(methodOverride("_method"))

// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200,
//     credentials: true
//   }

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("/Category");
});


app.use("/Category/", categoryController);
app.use("/Movie/", movieController);


app.use('/public', express.static('public'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});