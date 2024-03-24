const apikey = "9373b8db6b278d1f5cee8b7e5f1385b8";


const enterCity = document.querySelector('#enter_city');
const submit = document.querySelector('#submit_btn');


const weatherData = document.querySelector('.weather_data');
const weatherIcon = document.querySelector('.weather_icon');
const temperatureCon = document.querySelector('.temperature');
const descriptionCon = document.querySelector('.description');
const realFeelCon = document.querySelector('.Real_feel');
const humidityCon = document.querySelector('.Humidity');
const windSpeedCon = document.querySelector('.wind');
const cityCon = document.querySelector('#city');






async function getWeatherData(city){
  try {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
   
   if (!response.ok) {
     throw new Error('No response');
     
   }
   const data = await response.json();
   
   const temperature = Math.round(data.main.temp);
   const description = data.weather[0].description;
   const icon = data.weather[0].icon;
   const realFeel = data.main.feels_like;
   const humidity = data.main.humidity;
   const windSpeed = data.wind.speed;
   const cityName = data.name;
   
   
   weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
    temperatureCon.textContent = `${temperature}°C`;
    descriptionCon.textContent = description;
    realFeelCon.textContent = `Real feel: ${Math.round(realFeel)}°C`;
    humidityCon.textContent = `Humidity: ${humidity}`;
    windSpeedCon.textContent = `Wind speed: ${windSpeed}m/s`;
    cityCon.textContent = cityName;
   
  } catch (e) {
    throw e
  }
}




submit.addEventListener('click', (e)=>{
  e.preventDefault();
  const city = enterCity.value;
  getWeatherData(city);
})





