let myFavouriteMoview: any[] = ["MS Dhoni", "Bahubali", "Krish 3"];

let selectedMovie;

for (let movie of myFavouriteMoview) {
  if (movie === "Bahubali") {
    selectedMovie = movie;
  }
}
console.log(selectedMovie);
