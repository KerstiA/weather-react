import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="float weather-temperature">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="partly"
          className="float-left"
        />
        <div className="col-6">
          <div className="float">
            <strong>18</strong>
            <span className="units">
              <a href="/">°C</a>|<a href="/">°F</a>
            </span>
          </div>
        </div>
        <br />
        <div className="col-6">
          <ul>
            <li>Mostly Cloudy</li>
            <li>
              Humidity: 10<span></span>%
            </li>
            <li>
              Wind: 2<span></span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
