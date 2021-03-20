'use strict';

const express = require('express');
const scraper = require('./scraper');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'scraping'
  });
});

//search/star wars
app.get('/search/:title', (req, res) => {
  scraper
    .searchMovies(req.params.title)
    .then(movies => {
      res.json(movies);
    });
});

//search/star wars
app.get('/movie/:imdbID', (req, res) => {
  scraper
    .getMovie(req.params.imdbID)
    .then(movie => {
      res.json(movie);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});