import React from 'react'
import './CurrentWeather.css'

const CurrentWeather = (props) => {
    return(
        <div className="current-weather-container">
            <h2>Weather in {props.data && props.data.name + ', ' + props.data.sys.country }</h2>
            <p className="description"><b>Summary:</b>{props.data !== '' && props.data.weather && props.data.weather.map(weather => ' ' + weather.description)}</p>
            <img alt="weather-icon" src={props.data !== '' && props.data.weather && 'http://openweathermap.org/img/wn/' + props.data.weather.map(weather => weather.icon) + '@2x.png'}/>
            <p><b>Humidity:</b> {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.humidity}</p>
            <p><b>Temperature:</b> {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.temp + ' Degrees Celcius'}</p>
            <p><b>Wind Speed:</b> {typeof props.data.main !== 'undefined' && props.data.wind.speed}</p>
            <h2>Tomorrow's weather</h2>
            <p className="description"><b>Summary:</b>{props.forecastData !== '' && props.forecastData.weather && props.forecastData.weather.map(weather => ' ' + weather.description)}</p>
            <p><b>Temperature:</b> {typeof props.forecastData.main !== 'undefined' && props.forecastData.main && props.forecastData.main.temp + ' Degrees Celcius'}</p>

        </div>
    )
}

export default CurrentWeather