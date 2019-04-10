require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

const commands = process.argv[2];
const searchVariable = process.argv[3];

if(commands == "movie-this") {
    axios.get("http://www.omdbapi.com/?apikey=75323c5a&t=" + searchVariable + "/")
    .then(function (response) {
        console.log(response.Title);
        console.log(response.Year);
        console.log(response.Ratings[0]);
        console.log(response.Ratings[1]);
        console.log(response.Country);
        console.log(response.Language);
        console.log(response.Plot);
        console.log(response.Actors);
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

if (commands == "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + searchVariable + "/events?app_id=codingbootcamp")
    .then(function (response) {
        console.log(response.data);
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