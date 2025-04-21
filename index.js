let celciusTemperature = null;

function updateCityInfo(response) {
  let city = document.querySelector("#city");
  let temperature = document.querySelector("#temperature");
  let country = document.querySelector("#country");
  let descriptionText = document.querySelector("#description-text");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let date = response.data.location.localtime_epoch;
  let fullDate = document.querySelector("#date-time");
  let icon = document.querySelector("#icon");
  let iconUrl = `https:${response.data.current.condition.icon}`;

  celciusTemperature = Math.round(response.data.current.temp_c);

  city.innerHTML = response.data.location.name;
  temperature.innerHTML = Math.round(response.data.current.temp_c);
  country.innerHTML = response.data.location.country;
  descriptionText.innerHTML = response.data.current.condition.text;
  humidity.innerHTML = `${response.data.current.humidity}%`;
  windSpeed.innerHTML = `${response.data.current.wind_kph}km/hr`;
  fullDate.innerHTML = convertTime(date);
  icon.innerHTML = `<img src=${iconUrl} />`;
  temperature.innerHTML = toggleTempUnits(updateCityInfo);
}

function convertTime(dateStamp) {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = days[currentTime.getDay()];
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${day}, ${hour}:${minute}`;
}
convertTime();
function callCityInfo(city) {
  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=9e92ee46d3d0485f83b174516251304&q=${city}`;
  axios.get(apiUrl).then(updateCityInfo);
}

function changeToFahrenheit() {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round((celciusTemperature * 9) / 5) + 32;
  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.classList.add("active");
  let celcius = document.querySelector("#celcius");
  celcius.classList.remove("active");
}

function changeToCelcius() {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(celciusTemperature);
  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.classList.remove("active");
  let celcius = document.querySelector("#celcius");
  celcius.classList.add("active");
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToFahrenheit);

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", changeToCelcius);

function changeCity(event) {
  event.preventDefault();
  let inputField = document.querySelector("#input-field");
  callCityInfo(inputField.value);
}

let form = document.querySelector("#submit-form");
form.addEventListener("submit", changeCity);

callCityInfo("Lagos");
updateCityInfo("Lagos");
