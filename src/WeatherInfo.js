import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          <span className="item">{props.data.description}</span>
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex icon">
            <WeatherIcon
              code={props.data.icon}
              size={60}
              alt={props.data.description}
            />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <span className="item">Humidity:</span> {props.data.humidity} %
            </li>
            <li>
              <span className="item">Wind:</span> {Math.round(props.data.wind)}{" "}
              km/h
            </li>
            <li>
              <span className="item">Feels like:</span>{" "}
              {Math.round(props.data.feels_like)} °C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
