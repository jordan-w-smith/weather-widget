import React from 'react'
import './Weather.css'

const Weather = (props) => {
    return (
        props.data !== '' ? 
        <div className="weather-container">
            <div className="type-container">
                <p className="type" onClick={props.setWeatherType}>Today</p>
                <p className="type" onClick={props.setWeatherType}>Tomorrow</p>
            </div>
            {props.weatherType === 'current' ?
                <div>
                    <h2>Weather in {props.data && props.data.name + ', ' + props.data.sys.country}</h2>
                    <p className="description"><b>Summary:</b>{props.data !== '' && props.data.weather && props.data.weather.map(weather => ' ' + weather.description)}</p>
                    <img alt="weather-icon" src={props.data !== '' && props.data.weather && 'http://openweathermap.org/img/wn/' + props.data.weather.map(weather => weather.icon) + '@2x.png'} />
                    <p><b>Humidity:</b> {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.humidity}</p>
                    <p><b>Temperature:</b> {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.temp + ' Degrees Celcius'}</p>
                    <p><b>Wind Speed:</b> {typeof props.data.main !== 'undefined' && props.data.wind.speed}</p>
                </div>
                :
                <div>
                    <h2>Tomorrow's weather</h2>
                    <img alt="weather-icon" src={props.forecastData !== '' && props.forecastData.weather && 'http://openweathermap.org/img/wn/' + props.forecastData.weather.map(weather => weather.icon) + '@2x.png'} />
                    <p className="description"><b>Summary:</b>{props.forecastData !== '' && props.forecastData.weather && props.forecastData.weather.map(weather => ' ' + weather.description)}</p>
                    <p><b>Temperature:</b> {typeof props.forecastData.main !== 'undefined' && props.forecastData.main && props.forecastData.main.temp + ' Degrees Celcius'}</p>
                    <p><b>Wind Speed:</b> {typeof props.forecastData.main !== 'undefined' && props.forecastData.wind.speed}</p>
                </div>
            }
        </div>
        : ""
    )
}

export default Weather