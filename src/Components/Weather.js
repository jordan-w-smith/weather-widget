import React from 'react'
import './Weather.css'

const Weather = (props) => {
    return (
        props.data !== '' && props.forecastData !== '' ?
            <div className="weather-container">
                {props.weatherType === 'current' ?
                    <>
                        <div className="type-container">
                            <p className="type" onClick={props.setWeatherType}>See Tomorrow</p>
                        </div>
                        <h2>Current weather in {props.data && props.data.name + ', ' + props.data.sys.country}</h2>
                        <img alt="weather-icon" src={props.data !== '' && props.data.weather && 'http://openweathermap.org/img/wn/' + props.data.weather.map(weather => weather.icon) + '@2x.png'} />
                        <p className="description"><b>Summary:</b>{props.data !== '' && props.data.weather && props.data.weather.map(weather => ' ' + weather.description)}</p>
                        <p><b>Humidity:</b> {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.humidity}</p>
                        <p><b>Temperature:</b> {typeof props.data.main !== 'undefined' && props.data.main && props.data.main.temp + ' Degrees Celcius'}</p>
                        <p><b>Wind Speed:</b> {typeof props.data.main !== 'undefined' && props.data.wind.speed}</p>
                    </>
                    :
                    <>
                        <div className="type-container">
                            <p className="type" onClick={props.setWeatherType}>See Today</p>
                        </div>
                        <h2>Tomorrow's weather in {props.data && props.data.name + ', ' + props.data.sys.country}</h2>
                        <img alt="weather-icon" src={props.forecastData !== '' && props.forecastData.weather && 'http://openweathermap.org/img/wn/' + props.forecastData.weather.map(weather => weather.icon) + '@2x.png'} />
                        <p className="description"><b>Summary:</b>{props.forecastData !== '' && props.forecastData.weather && props.forecastData.weather.map(weather => ' ' + weather.description)}</p>
                        <p><b>Temperature:</b> {typeof props.forecastData.main !== 'undefined' && props.forecastData.main && props.forecastData.main.temp + ' Degrees Celcius'}</p>
                        <p><b>Humidity:</b> {typeof props.forecastData.main !== 'undefined' && props.forecastData.main && props.forecastData.main.humidity}</p>
                        <p><b>Wind Speed:</b> {typeof props.forecastData.main !== 'undefined' && props.forecastData.wind.speed}</p>
                    </>
                }
            </div>
            // : ''
            : ''
    )
}

export default Weather