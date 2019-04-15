require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api")

var spotify = new Spotify({
    id: '5e6ddc853509416da5938c66c724d60d',
    secret: 'd3e402ad683341b1a553f85f0154479a'
});

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
debugger
if (commands === "spotify-this-song") {
    console.log("Searching for " + searchVariable)
    debugger
    spotify
        .search(({ type: 'track', query: searchVariable }))
        .then(function(response) {
        console.log(response); 
        // console.log("Artist(s): " + artistsNames);
	    console.log("Song Name: " + data.tracks.items[0].name);
	    console.log("Preview Link: " + data.tracks.items[0].preview_url);
	    console.log("Album: " + data.tracks.items[0].album.name);
    })
    .catch(function(err) {
        console.error('Error occurred: ' + err); 
    })
}