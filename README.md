# trailer-tracker-backend

## This is an app that allows users to search Movie trailers in our database and OMBD’s database for the purpose of finding trailers for movies they may want to add to a play list or category.

Our backend is located here :
https://trailerstracker.herokuapp.com/Category

## Wireframe Images

---

## Motivation

Watching movies in general should be easy and fun. Being able to search a category and find trailers for the desired movie is an overlooked luxury. Our site makes this process easy and convenient.

![](./public/images/FrontEnd-Framwork.png)
![](./public/images/FrontEnd-Components.png)
![](./public/images/BackEnd.png)

---

## Getting Started

We started the project by brainstorming what we thought was different from apps that are out there currently.
We create a user flow chart and a reference for our routes.

The frameworks used for this project includes React, CSS, Express, MongoDB, Heroku, and Mongoose, and BootStrap.

For the backend we started with the index.js , models, controllers, and seeding our database.We used 2 models: Category and Movies. The category set up was straight forward and included full CRUD.

The Movie model set up had more to it. We incorporated Youtube and OMBD’s api. Our backend searches OMBD’s api by title and creates an instance of our Movie Model with title, genre, poster, and released year information. Then it searches Youtube’s api return results based on the title. We narrowed it down to only show Trailers of the title and will only return one result.

To connect our Front and Back End we made sure to do a few additional steps. These included downloading and incorporating cors. We required it in our index.js. We also added axios. Router.put would not work with heroku so we had to change to router.get in order to actually get the information from OMBD and Youtube and create our own data.

```
router.get("/new/:title", (req, res) => {
    axios.get(`http://www.omdbapi.com/?apikey=ef42ea14&t=${req.params.title}`).then(movie => {
        MovieModel.create({
            title: movie.data.Title,
            genre: movie.data.Genre,
            poster: movie.data.Poster,
            releaseYear: movie.data.Year
        }).then(newMovie => {
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.params.title}Trailer&maxResults=1&key=XXXX`).then(apiRes => {
                console.log(apiRes.data.items[0].id.videoId);

                newMovie.trailer = `https://www.youtube.com/embed/${apiRes.data.items[0].id.videoId}`;
                newMovie.save();

                res.json(newMovie);
            });
        });
    });
});
```

While working on the project we had to make sure our backend and frontend were not listening on the same ports.

We then connected our backend to Heroku and seeded our Heroku database.


## Set Up
To get your own copy of this application you can simply fork and download this repository. Run mongod, then node db/seed.js, followed by nodemon index.js. This will run the app at localhost:8080.


## Current Version
You can see the most recently updated deployed version of the front end is hosted at https://dctalk1234.github.io/trailer-tracker-frontend/


## Technologies Used
* node.js
* express.js
* mongoose.js
* MongoDB
* Heroku (for deployment)
* Axios for API Calls
