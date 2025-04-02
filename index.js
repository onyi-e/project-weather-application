function userInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input-field");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}

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

let cityDate = document.querySelector("#city-date");

cityDate.innerHTML = currentDate(updateddate);
