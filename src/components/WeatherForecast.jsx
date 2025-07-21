import React from "react";
import styles from "./WeatherForecast.module.css";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (props) => {
  return (
    <div className={`${styles.weather}`}>
      <h2>{props.day}</h2>
      <WeatherIcon src={props.src} alt={props.alt} />
      <p>
        <span>conditions: </span>
        {props.condition}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
};

export default WeatherForecast;
