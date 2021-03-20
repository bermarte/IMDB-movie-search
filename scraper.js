'use strict';

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const {
    response
} = require('express');


const searchUrl = 'https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q=';
const movieUrl = 'https://www.imdb.com/title/';

//cache
const searchCache = {};
const movieCache = {};

function searchMovies(searchTerm) {
    /*
    cache: is there a searchTerm in the cache? @1:05:00
    the first time a term is searched we will do the scraping and
    return that, but we will store it in memory. The second time we
    will search for that term, we will immediately return that term from the cache memory 
    */
    if (searchCache[searchTerm]){
        console.log('Serving from cache:', searchTerm);
        return Promise.resolve(searchCache[searchTerm])
    }

    //otherwise make the request
    return fetch(`${searchUrl}${searchTerm}`)
        //responseText  is in HTML
        .then(response => response.text())
        .then(body => {
            const movies = [];
            const $ = cheerio.load(body);
            $('.findResult').each(function (i, element) {
                const $element = $(element);
                const $image = $element.find('td a img');
                const $title = $element.find('td.result_text a');
                const imdbID = $title.attr('href').match(/title\/(.*)\//)[1];

                const movie = {
                    image: $image.attr('src'),
                    title: $title.text(),
                    imdbID
                };
                movies.push(movie);
            });

            //cache the search term
            searchCache[searchTerm] = movies;

            return movies;
        });
};

function getMovie(imdbID) {
    //cache
    if (movieCache[imdbID]){
        console.log('Serving from cache:', imdbID);
        return Promise.resolve(movieCache[imdbID]);
    }

    return fetch(`${movieUrl}${imdbID}`)
        .then(response => response.text())
        .then(body => {
            const $ = cheerio.load(body);
            const $title = $('.title_wrapper h1');

            const title = $title.first().contents().filter(function () {
                return this.type === 'text';
            }).text().trim();

            //remove '\n' and ','
            const rating = $('.subtext').first().contents().filter(function () {
                return this.type === 'text';
            }).text().replace(/\n|,/gm, '').trim();
  
            const runTime = $('time').first().contents().filter(function () {
                return this.type === 'text';
            }).text().trim();

            const genres = [];
            $('.subtext a').each(function(i, element){
                const genre = $(element).text();
                const re = /^[A-Za-z]+$/;
                //last element is a date
                if (re.test(genre)) genres.push(genre);
            });

            const datePublished = $('.subtext a:last-child').first().contents().filter(function () {
                return this.type === 'text';
            }).text().trim();

            const idmbRating = $('span[itemProp="ratingValue"]').text();

            const poster = $('div.poster a img').attr('src');

            const summary = $('div.summary_text').text().trim();

            //closure
            function getItems(itemArray){
                return function(i, element){
                    const item = $(element).text().trim();
                    itemArray.push(item);
                }
            }

            const directors = [];
            $('div.credit_summary_item:nth-child(2) a').each(getItems(directors));

            const writers = [];
            $('div.credit_summary_item:nth-child(3) a').each(getItems(writers));

            const stars = [];
            $('div.credit_summary_item:nth-child(4) a').each(function(i, element){
                const star = $(element).text().trim();
                const fullCast = /See full cast & crew/;
                //remove the last item
                if (!fullCast.test(star)) stars.push(star);
            });

            const storyLine = $('div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)').text().trim();

            const companies = [];
            $('a[href*="cons_tt_dt_co_"]').each(getItems(companies));

            const trailer = $('a.video-modal').attr('href');
            

            const movie = {
                imdbID,
                title,
                rating,
                runTime,
                genres,
                datePublished,
                idmbRating,
                poster,
                summary,
                directors,
                writers,
                stars,
                storyLine,
                companies,
                trailer: `https://www.imdb.com${trailer}`
            };

            //cache
            movieCache[imdbID] = movie;

            return movie;
        });
}

module.exports = {
    searchMovies,
    getMovie
};