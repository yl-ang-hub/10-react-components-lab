import React from "react";
import styles from "./WeatherForecast.module.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  return (
    <div className={`${styles.weather}`}>
      <h2>{props.day}</h2>
      <WeatherIcon src={props.src} alt={props.alt} />
      <WeatherData condition={props.condition} time={props.time} />
    </div>
  );
};

export default WeatherForecast;
