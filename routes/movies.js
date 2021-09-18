const movies = require("../@fake-db/movies.json");

const express = require("express");
const router = express.Router();

const isBestMovies = (movie) => {
  return movie.is_best_movie === true;
};

const isNowShowing = (movie) => {
  return movie.is_now_showing === true;
};

router.get("/", (req, res) => {
  if (req.query.is_best_movies) {
    // * check, if movies is the best movie

    let bestMovies = movies.filter(isBestMovies);
    res.send(bestMovies);
  } else if (req.query.is_now_showing) {
    // * check, if movies is on show

    let nowShowing = movies.filter(isNowShowing);
    res.send(nowShowing);
  } else res.send(movies);
});

module.exports = router;
