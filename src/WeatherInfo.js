import React from "react";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
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
                alt={props.data.description}
              />
            </div>
            <div className="float-left">
              <span className="temp">{Math.round(props.data.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Todays Minimum: °C</li>
            <li>Todays Maximum: °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}