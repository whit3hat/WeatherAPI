//previously searched cities
const cities = [];

//API Variables
function citySearch(city) {
    const apiKey = "a22da7765e1c4b4916ddcc298644a47e";
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&mode=json&appid=" + apiKey;

    //ajax to get connection to open weather
    $.ajax({
        url:queryURL,
        method: "GET"
    })
    .then(function(response){

      //log the queryURL
    console.log(response);

    //name , temp , windspeed , humidity display forecast : transfer content to HTML
    $('.cityName').html('<h3>').html('<h3>' + response.name + '</h3>');
    $('.temp').html('<h6>').html('<h6>' + response.main.temp + ' F</h6>');
    $('.humidity').html('<h6>').html('<h6>' + response.main.humidity + ' %</h6>');
    $('.wind').html('<h6>').html('<h6>' + response.wind.speed + ' MPH</h6>');
    
    });

    //add buttons to side


    //call for the 5 day forecast data 
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=json&appid=" + apiKey,
        method: "GET"
    })
    .then (function (forecast){
        //log the forecast data
        console.log(forecast);
    

    //array to store city forecast for 5 day
    cityForecast = [];

    //for loop to get the days forecast from the reponse above
    for(let i = 0; i < forecast.list.length; i+=8){
        //temp value to store the forecast data
        const tempForecast = new cityForecast(forecast.list[i].dt_txt,
            forecast.list[i].weather[0].icon,
            forecast.list[i].main.temp_max,
            forecast.list[i].main.temp_min)
        
        cityForecast.push(tempForecast);
    }
        //console log of the array for the 5 day
        console.log(cityForecast);
});       
};

//event handler for user clicking the search button
$('#button-addon1').on('click' , function(event) {
    //prevent the button from trying to submit the form
    event.preventDefault();
    //store city name
    const city = $('.form-control').val().trim();
    //store cities
    // cities.push(city);
    citySearch(city);
    //logging Cities Array storing previous searches
    console.log(cities);
});




