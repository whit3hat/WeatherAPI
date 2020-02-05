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
    
    //setting to local storage to recall when buttons of previous cities are clicked
    localStorage.setItem('CityName', response.name);
    localStorage.setItem('temp', response.main.temp);
    localStorage.setItem('humidity', response.main.humidity);
    localStorage.setItem('wind', response.wind.speed);

    });

    //empty the buttons div prior to running the loop
    $('.cities').empty();

    //add buttons to side for loop
    for (i = 0; i < cities.length; i++){
        var cityBtn = $("<button class='btn'>" + cities[i] + '</button>');
        //appends cities array button and the div to go to next line
        $('.cities').append(cityBtn, $('<div class="w-100"></div>'));
    };    

    //when button is clicked retrieve previous data

    //call for the 5 day forecast data 
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&mode=json&appid=" + apiKey,
        method: "GET"
    })
    .then (function (forecast){
        //log the forecast data
        console.log(forecast);
    

    //array to store city forecast for 5 day
    const cityForecast = [];

    //for loop to get the days forecast from the reponse above
    for (let i = 0; i < forecast.list.length; i+=8){
        //temp value to store the forecast data
        const tempForecast = {
            'date' : forecast.list[i].dt_txt,
            'icon' : forecast.list[i].weather[0].icon,
            'main_temp' : forecast.list[i].main.temp_max,
            'min_temp' : forecast.list[i].main.temp_min};
        
        cityForecast.push(tempForecast);
       //console log of the array for the 5 day
        console.log(cityForecast);
        console.log('date: ' , tempForecast.date);
        var iconUrl = "http://openweathermap.org/img/w/" + tempForecast.icon + ".png";

        $('.card-title').text(tempForecast.date);
        $('.card-img-top').attr('src' , iconUrl);
        $('.card-text').text(tempForecast.main_temp , tempForecast.min_temp);

    }

});       
};
 
//event handler for user clicking the search button
$('#button-addon1').on('click' , function(event) {
    //prevent the button from trying to submit the form
    event.preventDefault();
    //store city name
    const city = $('.form-control').val().trim();
    //store cities
    cities.push(city);
    citySearch(city);
    //logging Cities Array storing previous searches
    console.log(cities);
});

//previously searched cities
const cities = [];


