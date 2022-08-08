import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const ShowCountries = ({country}) => {
    const name      = country.name.common;
    const capital   = country.capital[0];
    const area      = country.area;
    const languages = country.languages;
    const flag      = country.flags.png;

    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`
        )
        .then((response) => {
            setWeather(response.data);
        });
    }, [capital]);
    
    return (
        <div>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <p>languages: </p>  
            <ul>
                { Object.values(languages).map( val => <li key={val}>{val}</li> ) }
            </ul>
            <img src={flag} alt={name} width="150px" />
            {Object.keys(weather).length !== 0 && (
                <>
                <h2>Weather in {capital}</h2>
                <p>temperature {weather.main.temp} Celcius</p>
                <p>{weather.weather.description}</p>
                {/* <img
                    src={weather.weather.icon}
                    alt={weather.weather.description}
                /> */}
                <p>
                    wind {weather.wind.speed} meter/sec 
                </p>
                </>
            )}

        </div>
    )
} 

export default ShowCountries
  