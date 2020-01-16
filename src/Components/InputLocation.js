import React from 'react'

const InputLocation = (props) => {
    return(
        <div>
        <label for="city">Enter City</label>
        <input value={props.city} onChange={props.setCity} name="city" type="text"></input>
        <input type="submit" onSubmit={props.fetchWeather(props.city)}></input>
        </div>
    )
}

export default InputLocation
