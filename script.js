let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let key = "808e5ac8ab60db5bb5904733f60d21e5";
let button = document.querySelector("#button");
let input = document.querySelector(".user");
let image = document.querySelector(".image");

async function checkWeather(input) {
    let link = await fetch(url + input + `&appid=${key}`);
    let data = await link.json();
    console.log(data);

    document.querySelector(".temperature").innerHTML = data.main.temp + "°C"
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"

    if (data.weather[0].main == "Clouds") {

        image.src = "drizzle.png";
    } else if (data.weather[0].main == "Clear") {
        image.src = "clear.png";
    }



}

button.addEventListener("click", function () {
    checkWeather(input.value);

})


