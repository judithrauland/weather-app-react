import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-light w-100">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Current Date</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src="http://openweathermap.org/img/wn/${
                  weatherData.icon
                }@2x.png"
                  size={64}
                  alt={weatherData.description}
                />
              </div>
              <div className="float-left">
                <span className="temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Todays Minimum: °C</li>
              <li>Todays Maximum: °C</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "da4354ccc4b5c937168c50391a787c99";
    let city = "Cologne";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading ...";
  }
}
