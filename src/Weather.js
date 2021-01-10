import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Palma de Mallorca",
    date: "Saturday 15:00 hod",
    description: "Sunny",
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png",
    temperature: 24,
    humidity: 70,
    wind: 40
  };
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
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
          <li>{weatherData.date}</li>
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
                <a href="/" className="active">
                  ℃{" "}
                </a>{" "}
                |<a href="/">ºF</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}