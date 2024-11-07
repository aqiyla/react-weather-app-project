import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-3 weather-details">
          <ul>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{Math.round(props.data.wind)} mph</strong>
            </li>
          </ul>
        </div>
      </div>
      <h2>
        <div className="weather-info d-flex justify-content-center">
          <span className="weather-forecast-icon">
            {" "}
            <WeatherIcon code={props.data.icon} size={56} />
          </span>
          <span>
            {" "}
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </span>
        </div>
      </h2>
    </div>
  );
}
