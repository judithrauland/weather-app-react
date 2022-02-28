import React from "react";

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
            />
          </div>
          <div className="col-1">
            <button type="submit" className="btn btn-light">
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
            <div className="float-left">Icon</div>
            <div className="float-left">Current Temperature °C</div>
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
