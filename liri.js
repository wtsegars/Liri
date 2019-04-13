require("dotenv").config();

var keys = require("./keys");
var spotifyAPI = require("node-spotify-api");

var request = require("request");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require('moment');
moment().format();

const commands = process.argv[2];
const searchVariable = process.argv[3];

if(commands === "movie-this") {
    axios.get("http://www.omdbapi.com/?apikey=75323c5a&t=" + searchVariable + "/")
    .then(function (response) {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.Ratings[0]);
        console.log(response.data.Ratings[1]);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
    })
    .catch(function (error) {
        if(error.response) {
            console.log(error.response.data);
        }
        else if(error.request) {
            console.log(error.request);
        }
        else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })
}

if (commands === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + searchVariable + "/events?app_id=codingbootcamp")
    .then(function (response) {
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city, response.data[0].venue.region, response.data[0].venue.country);
        console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
    })
    .catch(function (error) {
        if(error.response) {
            console.log(error.response.data);
        }
        else if(error.request) {
            console.log(error.request);
        }
        else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })
}

if (commands === "spotify-this-song") {
    spotify.request('https://api.spotify.com/v1/tracks/' + searchVariable + "/")
        .then(function(response) {
        console.log(response); 
    })
    .catch(function(err) {
        console.error('Error occurred: ' + err); 
    })
}