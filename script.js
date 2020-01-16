//variables
//user input on search to get weather
const city = "kansas city";

//API Variables
const apiKey = "a22da7765e1c4b4916ddcc298644a47e";
const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&mode=xml&appid=" + apiKey;
//ajax to get connection to open weather
$.ajax({
    url:queryURL,
    method: "GET"
})
//store all rretrieved data inside of an object 'response'
.then(function(response){
    //log the queryURL
    console.log(response);

//display forcast

//store cities
});
//add buttons to side

//use local storage to get cities and store ones searched