import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCountries from './components/ShowCountries';



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

  return (
    <div>
      <div>
          find countries <input onChange={handleQuery} value={query}></input>
      </div>
      <ShowCountries list={list} country={country}/>
    </div>
  )
}

export default App
