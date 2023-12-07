const apikey = "075fb7a9d7f093059e50055cd7b2d77c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let input = document.querySelector('.search input');
let btn = document.querySelector('.search button');
let icon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + `&appid=${apikey}` + `&q=${city}`);
    if(response.status === 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
        var data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
        if(data.weather[0].main === "Clouds")  icon.src = "images/clouds.png";
        else if(data.weather[0].main === "Clear") icon.src = "images/clear.png";
        else if(data.weather[0].main === "Drizzle") icon.src = "images/drizzle.png";
        else if(data.weather[0].main === "Mist") icon.src = "images/mist.png";
        else if(data.weather[0].main === "Rain") icon.src = "images/rain.png";
        else if(data.weather[0].main === "Snow") icon.src = "images/snow.png";
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
}


btn.addEventListener(('click') , ()=>{
    checkWeather(input.value);
    input.value = "";
});