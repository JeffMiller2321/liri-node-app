require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment");

// your if statement will go here to see what they type
//aka if conert-this then fire off our concert function
//or if spotify-this-song fire off our spotify function

var command = process.argv[2]
var title = process.argv.slice(3).join(" ")
// console.log(command, title);
// console.log(process.argv)


if(command==="concert-this"){
    searchConcert()
} else if (command == "movie-this"){
    searchMovie()
} else if (command == "spotify-this-song"){
    searchSpotify()
} else {
    doWhatItSays()

    }


//this will use axios & bands in town API
function  searchConcert() {
console.log("concert search")
    var url = "https://rest.bandsintown.com/artists/" + title + "/events?app_id=codingbootcamp"
    axios.get(url).then(
        function(response){
            console.log(response.data)
            console.log(response.data[0].venue.name)
            console.log(response.data[0].venue.city)
            console.log(response.data[0].datetime)



        }
    )
}
//this will use axios & OMDB API
function  searchMovie() {
    var moviekey = '43bfd97f';
    var url ="http://www.omdbapi.com/?apikey="+moviekey+"&s="+ title;
    axios.get(url).then(
        function(response){
            console.log(response.data);
            // console.log(response.data.Search[0].Title)
            // console.log(response.data.Search[0].Year)
            // console.log(response.data.Search[0].T)



        }
    )
    console.log("movie search");
    
}
//this will use spotify npm package
function  searchSpotify() {
console.log("spotify search")
    
}
//this is a strech goal
function  doWhatItSays() {
        console.log("else")
}