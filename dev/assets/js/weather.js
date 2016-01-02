var weatherData = {
	city: document.querySelector ("#city"),
	weather: document.querySelector("#weather"),
	temperature: document.querySelector("#temperature"),
	temperatureValue: 0,
	units: "F"
};

function switchUnits(){
	if (weatherData.units == "C") {
		weatherData.temperatureValue = 
	roundTemperature(weatherData.temperatureValue * 9/5 + 32);
		weatherData.units = "F";
	}
	else{
		weatherData.temperatureValue = 
	roundTemperature((weatherData.temperatureValue - 32) * 5/9);
		weatherData.units = "C";
	}
		weatherData.temperature.innerHTML =
	weatherData.temperatureValue + weatherData.units + ", ";
}

function getLocationAndWeather() {
	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();

		xhr.addEventListener("load", function() {var response = JSON.parse(xhr.responseText);

			console.log(response);
			var position = {
				latitude: response.latitude
				longitude: response.longitude
			};
			var cityName = response.city;

			var weatherSimpleDescription =
		response.weather.simple;
			var weatherDescription =
		response.weather.description;
			var weatherTemperature =
		roundTemperature(response.weather.temperature);

			weatherData.temperatureValue = weatherTemperature;

			weatherData.city.innerHTML = cityName;
			weatherData.weather.innerHTML = ", " + weatherDescription;
			weatherdata.temperature.innerHTML = weatherTemperature + weatherData.units;
		}, false);
		xhr.addEventListener("error", function(err){alert("Could not complete the request");
	}, false);

		xhr.open("GET", "https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE", true);
		xhr.send();

	}
	else{
		alert("Unable to fetch the location and weather data.");
		}
	}
}