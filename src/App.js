import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/aqiyla?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Aqiyla McLean
          </a>
          {""} and is{" "}
          <a
            href="https://github.com/aqiyla/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://vocal-kashata-d266ed.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
