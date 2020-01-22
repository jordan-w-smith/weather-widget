import React from 'react'
import InputLocation from '../Components/InputLocation'
import Weather from '../Components/Weather'

class WeatherAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            country: '',
            countryCode: '',
            data: '',
            forecastData: '',
            countries: '',
            weatherType: 'current'
        }
        this.setCity = this.setCity.bind(this)
        this.setCountry = this.setCountry.bind(this)
        this.setCountryCode = this.setCountryCode.bind(this)
        this.fetchWeather = this.fetchWeather.bind(this)
        this.setWeatherType = this.setWeatherType.bind(this)
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(countries => this.setState({
                countries: countries
            }))
    }

    setCity(event) {
        this.setState({
            city: event.target.value
        })
    }

    setCountry(event) {
        this.setState({
            country: event.target.value
        })
    }

    setCountryCode(event) {
        this.setState({
            countryCode: event.target.value
        })
    }

    setWeatherType() {
        this.state.weatherType === 'current' ? 
        this.setState({weatherType: 'tomorrow'})
        : this.setState({weatherType: 'current'})
    }

    fetchWeather(event) {
        event.preventDefault()
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + ',' + this.state.country + '&APPID=31505488a674c0ef188d19cd75e796e0&units=metric'
        fetch(url)
            .then(res => res.json())
            .then(JSON.stringify.res)
            .then(data => this.setState({
                data: data !== '' ? data : ''
            }))
        let ts = Math.round((new Date()).getTime() / 1000)
        let forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.city + ',' + this.state.country + '&APPID=31505488a674c0ef188d19cd75e796e0&units=metric&cnt=4&dt=' + ts
            fetch(forecastUrl)
                .then(res => res.json())
                .then(forecastData => this.setState({
                    forecastData : typeof forecastData.list !== 'undefined' ? forecastData.list[3] : ''
            }))

    }

    render() {
        return(
            <>
                <InputLocation 
                    countries={this.state.countries} 
                    city={this.state.city} 
                    country={this.state.country} 
                    fetchWeather={this.fetchWeather} 
                    setCity={this.setCity} 
                    setCountry={this.setCountry} 
                    setCountryCode={this.setCountryCode}
                ></InputLocation>
                <Weather 
                    data={this.state.data} 
                    forecastData={this.state.forecastData} 
                    setWeatherType={this.setWeatherType} 
                    weatherType={this.state.weatherType} 
                    city={this.state.city}
                ></Weather>
            </>
        )
    }
}

export default WeatherAppContainer