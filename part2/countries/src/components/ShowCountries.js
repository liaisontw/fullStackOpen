const ShowCountries = ({list, country}) => {
    const count = list.length;
    if ( 10 < count ) {
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
  
    if ( 1 === count ) {
      const name      = country.name.common;
      const capital   = country.capital[0];
      const area      = country.area;
      const languages = country.languages;
      const flag      = country.flags.png;
      
      return (
        <div>
          <h1>{name}</h1>
          <p>capital {capital}</p>
          <p>area {area}</p>
          <p>languages: </p>  
          <ul>
            { Object.values(languages).map( val => <li key={val}>{val}</li> ) }
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

export default ShowCountries
  