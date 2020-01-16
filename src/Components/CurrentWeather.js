import React from 'react'

const CurrentWeather = (props) => {
    return(
        <>
            <h2>{props.data.name}</h2>
            {/* <p>Weather today...{props.data.weather}</p> */}
        </>
    )
}

export default CurrentWeather