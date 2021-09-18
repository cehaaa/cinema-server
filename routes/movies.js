const movies = require("../@fake-db/movies.json");

const express = require("express");
const router = express.Router();

const isBestMovies = (movie) => {
  return movie.is_best_movie === true;
};

router.get("/", (req, res) => {
  if (req.query.is_best_movies) {
    let bestMovies = movies.filter(isBestMovies);
    res.send(bestMovies);
  } else res.send(movies);
});

module.exports = router;
