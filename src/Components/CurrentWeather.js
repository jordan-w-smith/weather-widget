import React from 'react'
import './CurrentWeather.css'

const CurrentWeather = (props) => {
    return(
        <div className="current-weather-container">
            <h2>Weather in {props.data.name}</h2>
            <p>{props.data !== '' && props.data.weather && props.data.weather.map(weather => weather.main)}</p>
            <p>{props.data !== '' && props.data.weather && props.data.weather.map(weather => weather.description)}</p>
            <img alt="weather-icon" src={props.data !== '' && props.data.weather && 'http://openweathermap.org/img/wn/' + props.data.weather.map(weather => weather.icon) + '@2x.png'}/>
            {/* <p>{props.data.main.temp !== '' && props.data.main.temp && props.data.main.temp}</p> */}
            {/* <p>{props.data !== '' && props.data.main && props.data.main.map(main => main.temp)}</p> */}
            
            <p>humidity: {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.humidity}</p>
            <p>Temperature: {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.temp}</p>
            {/* <p>{props.data}</p> */}
        </div>
    )
}

export default CurrentWeather