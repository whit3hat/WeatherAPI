//variables
//user input on search to get weather

const city = "Kansas City";

//API Variables
const apiKey = "a22da7765e1c4b4916ddcc298644a47e";
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&mode=json&appid=" + apiKey;
//ajax to get connection to open weather
$.ajax({
    url:queryURL,
    method: "GET"
})
//store all rretrieved data inside of an object 'response'
.then(function(response){
    //log the queryURL
    console.log(response);
//name , temp , windspeed , humidity
$('.cityName').html('<h3>').html('<h3>' + response.name + '</h3>');
$('.temp').html('<h6>').html('<h6>' + response.main.temp + '</h6>');
$('.humidity').html('<h6>').html('<h6>' + response.main.humidity + ' %</h6>');
$('.wind').html('<h6>').html('<h6>' + response.wind.speed + ' MPH</h6>');


//display forcast : transfer content to HTML

//store cities
});
//add buttons to side

//use local storage to get cities and store ones searched