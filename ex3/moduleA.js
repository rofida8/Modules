import { topMovies } from "./moduleB.js";

function checkMovie(movieName) {
  topMovies.includes(movieName) ? true : false;
}

export { checkMovie };
