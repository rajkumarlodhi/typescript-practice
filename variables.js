var myFavouriteMoview = ["MS Dhoni", "Bahubali", "Krish 3"];
var selectedMovie;
for (var _i = 0, myFavouriteMoview_1 = myFavouriteMoview; _i < myFavouriteMoview_1.length; _i++) {
    var movie = myFavouriteMoview_1[_i];
    if (movie === "Bahubali") {
        selectedMovie = movie;
    }
}
console.log(selectedMovie);
