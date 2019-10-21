const Category = require("../models/Category");
const Movie = require("../models/Movie");
let movieList = require("../db/movieData.json");

Movie.deleteMany({}).then(() => {
	Movie.insertMany(movieList)
		.then(() => {
			console.log("we got movie data");
		})
		.then(() => {
			Category.deleteMany({}).then(() => {
				Category.create({
					Title: "Action"
				}).then(action => {
					Movie.find({ genre: { $in: ["action", 'Action'] } }).then(moviesToAdd => {
						console.log(moviesToAdd);
						for (let i = 0; i < moviesToAdd.length; i++) {
							action.movies.push(moviesToAdd[i])
                        }
                        action.save();
						console.log("category data");
					});
				});
			});
		});
});
