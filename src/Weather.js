import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>City</h1>
      <ul>
        <li>Current Date</li>
        <li className="text-capitalize">Description</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                size={64}
              />
            </div>
            <div className="float-left">
              <span className="temp">10</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: %</li>
            <li>Wind: km/h</li>
            <li>Todays Minimum: °C</li>
            <li>Todays Maximum: °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
