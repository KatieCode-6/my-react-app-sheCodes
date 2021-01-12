import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Monday 18:00",
    description: "Cloudy",
    temperature: 15,
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png",
    humidity: 80,
    wind: 40
  };
  return (
    <div className="weather">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>
          <strong>{weatherData.city}</strong>
        </h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
              width="100"
              height="100"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">℃ </a>|<a href="/">ºF </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="row weather-forecast" id="forecast"></div>
    </div>
  );
}

<small>
        <a href="https://github.com/KatieCode-6/vanilla-project" >Open-source code</a> by Katie Kovacova
    </small>