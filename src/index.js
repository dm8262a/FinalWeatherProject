//⏰Feature #1 In your project, display the current date and time using JavaScript: Tuesday 16:00

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let actualDate = document.querySelector("#current-time");
actualDate.innerHTML = `${day}, ${month} ${date}, ${hour}:${minute}`;

//🕵️‍♀️Feature #2 Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function searchCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#city-input");
  let h1 = document.querySelector("#entered-city");
  if (searchCity.value) {
    h1.innerHTML = `${searchCity.value}`;
  } else {
    h1.innerHTML = null;
    alert("please enter a city");
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleCity);

// Week 5 Search Engine

function getWeather(response) {
  let temp = document.querySelector("#searched-temp");
  temp.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  let wind = document.querySelector("#searched-wind");
  wind.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  let humidity = document.querySelector("#searched-humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
  let city = document.querySelector("#entered-city");
  city.innerHTML = response.data.name;
}

function findCity(city) {
  let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(getWeather);
}

function handleCity(e) {
  e.preventDefault();
  let searchCity = document.querySelector("#city-input");
  findCity(searchCity.value);
}
console.log(searchCity);
