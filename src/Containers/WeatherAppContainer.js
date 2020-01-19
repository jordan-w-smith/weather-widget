import React from 'react'
import InputLocation from '../Components/InputLocation'
import CurrentWeather from '../Components/CurrentWeather'

class WeatherAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            city: 'birmingham',
            country: '',
            countryCode: '',
            data: '',
            countries: ''
        }
        this.setCity = this.setCity.bind(this)
        this.setCountry = this.setCountry.bind(this)
        this.setCountryCode = this.setCountryCode.bind(this)
        this.fetchWeather = this.fetchWeather.bind(this)
        
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

    fetchWeather(event) {
        event.preventDefault()
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + ',' + this.state.country + '&APPID=31505488a674c0ef188d19cd75e796e0'
        fetch(url)
            .then(res => res.json())
            .then(JSON.stringify.res)
            .then(data => this.setState({
                data: data
            }))
    }

    render() {
        return(
            <>
                <InputLocation countries={this.state.countries} city={this.state.city} country={this.state.country} fetchWeather={this.fetchWeather} setCity={this.setCity} setCountry={this.setCountry} setCountryCode={this.setCountryCode}></InputLocation>
                <CurrentWeather data={this.state.data}></CurrentWeather>
            </>
        )
    }
}

export default WeatherAppContainer