import { useState, useEffect } from 'react'
import Filter     from './components/Filter'
import Persons    from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons,   setPersons   ] = useState([]);
  const [ newName,   setNewName   ] = useState( '' );
  const [ newNumber, setNewNumber ] = useState( '' );
  const [ newSearch, setNewSearch ] = useState( '' );
  const [ newFilter, setNewFilter ] = useState( persons );

  useEffect(() => {    
    personService      
      .getAll()
      .then(initPersons => {        
        setPersons(initPersons)
        setNewFilter(initPersons)      
      })  
  }, [])  

  const handleNewFilter = (event) => {
      const searchTarget = event.target.value;
      setNewSearch( searchTarget );
      const filterPersons = persons.filter(
        (person) => person.name.toLowerCase().search( searchTarget.toLowerCase() ) !== -1
      );
      setNewFilter(filterPersons);
  };

  const addPerson = (event) => {
      event.preventDefault()
      const newObject = {
          name: newName,
          number: newNumber
      }
      const currentPerson = persons.filter((person) => person.name === newObject.name);
      
      if ( currentPerson.length === 1 ) {
          alert(`${currentPerson[0].name} is already added to phonebook`);
      } else {
        personService    
            .create(newObject)    
            .then(resNewPersons => {      
              const newPersons = persons.concat(resNewPersons);    
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
