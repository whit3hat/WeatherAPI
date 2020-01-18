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

    //name , temp , windspeed , humidity display forcast : transfer content to HTML
    $('.cityName').html('<h3>').html('<h3>' + response.name + '</h3>');
    $('.temp').html('<h6>').html('<h6>' + response.main.temp + ' F</h6>');
    $('.humidity').html('<h6>').html('<h6>' + response.main.humidity + ' %</h6>');
    $('.wind').html('<h6>').html('<h6>' + response.wind.speed + ' MPH</h6>');
    });
}

//event handler for user clicking the search button
$('#button-addon1').on('click' , function(event) {
    //prevent the button from trying to submit the form
    event.preventDefault();
    //store city name
    const city = $('.form-control').val().trim();
    cities.push(city);
    citySearch(city);
    //logging Cities Array storing previous searches
    console.log(cities);
});
//store cities

//add buttons to side

//use local storage to get cities and store ones searched