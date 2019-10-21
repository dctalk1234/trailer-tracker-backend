let mongoose = require("../db/connection");

let CategorySchema = new mongoose.Schema({
	title: String,
	movies: [
		{
			ref: "Movie",
			type: mongoose.Schema.Types.ObjectId
		}
	]
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
