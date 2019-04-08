require("dotenv").config();

var axios = require("axios");

axios.get("http://www.omdbapi.com/?apikey=75323c5a")
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
});

axios.get("")
.then(function (response) {
    console.log(response.data);
})