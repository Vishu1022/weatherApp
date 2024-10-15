const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";

function getWeather() {
    const city = document.getElementById('city-input').value;
    const weatherDetails = document.getElementById('WeatherDetails');
    if (city === '') {
        weatherDetails.innerHTML = '<p>Please enter City name</p>';
        return;
    }

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
       if(data.cod==='404'){
        weatherDetails.innerHTML="<p>City not found,please try again</p>";
       }
       else{
        console.log("data is here",data);
        weatherDetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
       <p>Temperature:${data.main.temp}</p>
      <p>TemperatureMax:${data.main.temp_max}</p>
      <p>TemperatureMin:${data.main.temp_min}</p>
      <p>Humidity:${data.main.humidity}</p>
      <p>WindSpeed:${data.wind.speed}</p>
      <p>Weather:${data.weather[0].description}</p>
      <p>Pressure:${data.main.pressure}</p>`

     
    }
    })
    .catch((error)=>{
        weatherDetails.innerHTML="<p>error fetching data</p>";
    });
}
  // Change image based on weather condition
  const weatherCondition = data.weather[0].main.toLowerCase();

  if (weatherCondition.includes('cloud')) {
      weatherImage.src = 'https://i.imgur.com/ZsllRrk.png'; // Cloud icon
  } else if (weatherCondition.includes('rain')) {
      weatherImage.src = 'https://i.imgur.com/M3t6Fkl.png'; // Rain icon
  } else if (weatherCondition.includes('sun') || weatherCondition.includes('clear')) {
      weatherImage.src = 'https://i.imgur.com/qy7Nr5P.png'; // Sun icon
  } else if (weatherCondition.includes('snow')) {
      weatherImage.src = 'https://i.imgur.com/OEOTNAD.png'; // Snow icon
  } else {
      weatherImage.src = 'https://i.imgur.com/MWZcd2E.png'; // Default weather icon
  }