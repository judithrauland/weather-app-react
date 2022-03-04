import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="11n" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-min">3 °</span>
            <span className="WeatherForecast-temp-max">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
