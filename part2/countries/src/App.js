import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCountries from './components/ShowCountries';

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ query,     setQuery     ] = useState('');
  const [ list,      setList      ] = useState([]);
  const [ country,   setCountry   ] = useState({});

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
 
  return (
    <div>
      <p>
          find countries <input onChange={handleQuery} value={query}></input>
      </p>
      { 
        ( 10 < list.length ) ? ( <p>Too many matches, specify another filter</p> ) 
          : (list.map(country =>
            <p key={country.name.common}>{country.name.common}
            <button onClick={() => setCountry(country) }>show</button>
            </p>
        ))  
      }
      { country.name && <ShowCountries country={country} />}
      </div>
  )
}

export default App;
