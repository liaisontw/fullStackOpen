import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter     from './components/Filter'
import Persons    from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons,   setPersons   ] = useState([]);
  const [ newName,   setNewName   ] = useState( '' );
  const [ newNumber, setNewNumber ] = useState( '' );
  const [ newSearch, setNewSearch ] = useState( '' );
  const [ newFilter, setNewFilter ] = useState( persons );

  useEffect(() => {    
    axios      
      .get('http://localhost:3001/persons')      
      .then(response => {        
        setPersons(response.data)
        setNewFilter(response.data)      
      })  
  }, [])  

  const handleNewFilter = (event) => {
      const searchTarget = event.target.value;
      //console.log( event.target.value );
      setNewSearch( searchTarget );
      const filterPersons = persons.filter(
        (person) => person.name.toLowerCase().search( searchTarget.toLowerCase() ) !== -1
      );
      setNewFilter(filterPersons);
  };

  const addPerson = (event) => {
      event.preventDefault()
      const noteObject = {
          name: newName,
          number: newNumber
      }
      // let found = false;
      
      // persons.forEach( person => { 
      //     found = person.name === noteObject.name;
      // } ) ;
      const currentPerson = persons.filter((person) => person.name === noteObject.name);
      
      if ( currentPerson.length === 1 ) {
          alert(`${currentPerson[0].name} is already added to phonebook`);
      } else {
          axios    
            .post('http://localhost:3001/persons', noteObject)    
            .then(response => {      
              console.log(response);
              let newPersons = persons.concat(response);    
              setPersons(newPersons);
              setNewFilter(newPersons);
            })
      }
  }

  const handleNameKeyin = (event) => {
      setNewName(event.target.value)
  }
  const handleNumberKeyin = (event) => {
      setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        newSearch       = {newSearch}
        handleNewFilter = {handleNewFilter}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson    = {addPerson}
        newName      = {newName}
        handleNameKeyin   = {handleNameKeyin}
        newNumber    = {newNumber}
        handleNumberKeyin = {handleNumberKeyin}
      />
      <h2>Numbers</h2>
      <Persons filter={newFilter} />
    </div>
  )
}

export default App
