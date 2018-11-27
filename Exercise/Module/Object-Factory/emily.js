var movies = require('./movie');

var emilyMovies = movies();
emilyMovies.favMovies ="The Notebook";
console.log("emily's favourite movie is: " + emilyMovies.favMovies);