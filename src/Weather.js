import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-contrl"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Saturday 8:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          ></img>
          76°
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 0%</li>
            <li>Humidity: 41%</li>
            <li>Wind: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
