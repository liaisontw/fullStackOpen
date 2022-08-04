import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ query,     setQuery     ] = useState('')
  const [ list,      setList      ] = useState([])

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
}

  return (
    <div>
      <div>
          find countries <input onChange={handleQuery} value={query}></input>
      </div>
      <div>
          {list.map(country =>
            <p key={country.name.common}>{country.name.common}</p>
          )}
      </div>
    </div>
  )
}

export default App
