import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ query,     setQuery     ] = useState('');
  const [ list,      setList      ] = useState([]);
  const [ country,   setCountry   ] = useState('');

  useEffect(() => {    
    axios      
      .get('https://restcountries.com/v3.1/all')      
      .then(response => {        
        setCountries(response.data)      
      })  
  }, [])
  
  const handleQuery = (event) => {
    const queryValue = event.target.value;
    setQuery(queryValue);
    const filterCountries = countries.filter(
      (country) => country.name.common.toLowerCase().search( queryValue.toLowerCase() ) !== -1
    );
 
    setList(filterCountries);
    if ( 1 === filterCountries.length ) {
      setCountry(filterCountries[0]);
    }
  }


  const showCountries = () => {
    const count = list.length;
    if ( 10 < count ) {
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
 
    if ( 1 === count ) {
      const name = country.name.common;
      const capital = country.capital[0];
      const area = country.area;
      const languages = country.languages;
      const flag = country.flags.png;
      const langList = Object.values(languages).map(val => val);
      
      return (
        <div>
          <h1>{name}</h1>
          <p>capital {capital}</p>
          <p>area {area}</p>
          <p>languages: </p>  
          <ul>
            { langList.map( val => 
              <li key={val}>{val}</li>
            )}
          </ul>
          <img src={flag} alt={name} width="100px" />
        </div>
      )  
    }

    return (
      <div>
          {list.map(country =>
            <p key={country.name.common}>{country.name.common}</p>
          )}
      </div>
    )
  }

  return (
    <div>
      <div>
          find countries <input onChange={handleQuery} value={query}></input>
      </div>
      {showCountries()}
    </div>
  )
}

export default App
