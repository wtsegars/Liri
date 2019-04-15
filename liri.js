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

const fs = require('fs');

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
        console.log("Artist(s): " + JSON.stringify(response.tracks.items[0].artists[0].name, null, 2));
        console.log("Song Name: " + response.tracks.items[0].name);
        console.log("Preview Link: " + response.tracks.items[0].preview_url);
        console.log("Album: " + response.tracks.items[0].album.name);
    })
    .catch(function(err) {
        console.error('Error occurred: ' + err); 
    })
}
if (commands === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        
        var varArray = data.split(",");
        
        var replace = varArray[1].replace(/['"]+/g,'');
        
        if (varArray.includes("spotify-this-song")) {
            console.log("Searching for " + replace)
            debugger
            spotify
            .search(({ type: 'track', query: replace }))
            .then(function(response) {
            console.log("Artist(s): " + JSON.stringify(response.tracks.items[0].album.artists[0].name, null, 2));
            console.log("Song Name: " + response.tracks.items[0].name);
            console.log("Preview Link: " + response.tracks.items[0].preview_url);
            console.log("Album: " + response.tracks.items[0].album.name);
            })
        }
        if (varArray.includes("movie-this")) {
            axios.get("http://www.omdbapi.com/?apikey=75323c5a&t=" + replace + "/")
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
        }
        if (varArray.includes("concert-this")) {
            axios.get("https://rest.bandsintown.com/artists/" + searchVariable + "/events?app_id=codingbootcamp")
            .then(function (response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city, response.data[0].venue.region, response.data[0].venue.country);
            console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
            })
        }
    })
}
