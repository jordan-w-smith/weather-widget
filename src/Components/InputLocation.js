import React from 'react'
import './InputLocation.css'

const InputLocation = (props) => {
    return (
        <div className="form-container">

            <form onSubmit={props.fetchWeather}>
                <label for="city">Enter City</label>
                <input value={props.city} onChange={props.setCity} name="city" type="text"></input>
                <label for="country">Enter Country</label>
                <select value={props.country} onChange={props.setCountry}>
                    {props.countries && props.countries.map(country => <option value={country.alpha2Code}>{country.name}</option>)}
                </select>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default InputLocation
