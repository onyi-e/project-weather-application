function userInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input-field");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${h1.innerHTML}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  let featureCityTemp = document.querySelector(".featured-temp");
  let roundedUpTemp = Math.round(response.data.temperature.current);
  featureCityTemp.innerHTML = `${roundedUpTemp}`;

  console.log(response.data.city);
}
let apiKey = "3aco6795a94b0838a7e43f73ad5b4e0t";

function currentDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes},`;
}
let inputField = document.querySelector("#submit-form");
inputField.addEventListener("submit", userInput);

let updateddate = new Date();

let cityDate = document.querySelector("#city");

cityDate.innerHTML = currentDate(updateddate);
