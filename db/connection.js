const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trailerTracker');


module.exports = mongoose;