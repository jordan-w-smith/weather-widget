import React from 'react'
import InputLocation from '../Components/InputLocation'
import CurrentWeather from '../Components/CurrentWeather'

class WeatherAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            data: ''
        }
        this.setCity = this.setCity.bind(this)
        this.fetchWeather = this.fetchWeather.bind(this)
        
    }

    setCity(event) {
        this.setState({
            city: event.target.value
        })
    }

    fetchWeather(city) {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=31505488a674c0ef188d19cd75e796e0'
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                data: data
            }))
    }

    render() {
        return(
            <>
                <InputLocation city={this.state.city} fetchWeather={this.fetchWeather} setCity={this.setCity}></InputLocation>
                <CurrentWeather data={this.state.data}></CurrentWeather>
                <p>test</p>
            </>
        )
    }
}

export default WeatherAppContainer