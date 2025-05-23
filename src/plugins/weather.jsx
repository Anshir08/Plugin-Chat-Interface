import React from 'react'

const weather = async ({city}) => {
  try {
    const data = await fetch(`https://api.weatherstack.com/current?access_key=d2ac5f4f2798a51d8a01a68a2d9e93a6&query=${city}`);
    if (!data.ok) {
      throw new Error(`Network response was not ok: ${data.statusText}`);
    }
    const json = await data.json();
    if (!json.current.weather_descriptions || !json.current.weather_descriptions.length || !json.current.temperature || !json.current.feelslike || !json.current.humidity) {
      throw new Error("No valid weather data found");
    }
    const result = json.current.weather_descriptions[0] + '\n' + 'Temperature: ' + json.current.temperature + '°C' + '\n' + 'Feels like: ' + json.current.feelslike + '°C' + '\n' + 'Humidity: ' + json.current.humidity + '%';
    console.log(result)
    return result;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return "Error fetching weather data";
  }
}

export default weather