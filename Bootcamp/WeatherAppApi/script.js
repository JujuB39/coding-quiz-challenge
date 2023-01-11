// Gathering all elements needed from HTML 
inputEl = document.querySelector(".search")
form = document.querySelector(".form")
apikey = eaeb1de27b6bfa327763903032ee3804
currentForecast = document.querySelector('.forecast')
fiveDayForecast = document.querySelector('.five-day-forecast')
pastSearch = document.querySelector('.past-search')
currentDate = moment().format()

var formSubmit = function (event) {
    // event.preventDefault();

//feth api
function getForecast () {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + inputEl + "&limit=1&appid=" + apikey)

    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data.results)
      //  for (var i = 0; i< //.length, i++) {

      })

        //Need City Name (name) /date 
            
        // Need Icon representation
            //list.weather.icon
        // Need Temp
            //list.main.temp
        //Need Humidity
            //list.main.humidity
        // Need wind speed 
            //list.wind.speed



        //Create Elements needed 

        //var city = 
    }
}

    //fetch(cityUrl)
        //.then(function(response) {response.JSON()}
        // .then(data => {

       // })

        //})
    //city.textcontent = city.name + " " 

// function for search handler
// function searchHandler(event) {
//     event.preventdefault()
//     var location = input.value.trim()
//     pastSearchCities.push(location)
//     localStorage.getItem("cities", JSON.stringify(pastSeach))
//     localStorage.getItem("city", location)
// }

//function to renderpastcities 


//FOr future 5 day forecasts 
      //Need  /date 
        // Need Icon representation
        // Need Temp
        //Need Humidity
        // Need wind speed 

inputEl.addEventListener('search', formSubmit)