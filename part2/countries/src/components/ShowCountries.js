const ShowCountries = ({country}) => {
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

export default ShowCountries
  