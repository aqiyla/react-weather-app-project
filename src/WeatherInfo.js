import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="col-3">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
      <h2>
        <div className="weather-info d-flex justify-content-center">
          <span>
            {" "}
            <WeatherIcon code={props.data.icon} size={52} />
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
