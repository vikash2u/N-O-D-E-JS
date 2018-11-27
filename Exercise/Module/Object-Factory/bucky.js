var movies = require('./movie');

var buckyMovies = movies();
buckyMovies.favMovies ="Good will Hunting";
console.log("Bucky's favourite movie is: " + buckyMovies.favMovies);