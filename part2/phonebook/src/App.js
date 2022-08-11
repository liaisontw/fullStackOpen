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
        if ( window.confirm (
              `${currentPerson[0].name} is already added to phonebook, replace the old number with a new one?`
        ) ) {
          personService    
          .update( currentPerson[0].id, newObject )    
          .then( ( resPerson ) => {
            const newPersons = persons.map( ( person ) =>
              person.id !== resPerson.id ? person : resPerson
            );
            setPersons(newPersons);
            setNewFilter(newPersons);
          })
        } 
      } else {
        personService    
          .create( newObject )    
          .then( resNewPerson => {      
            const newPersons = persons.concat(resNewPerson);    
            setPersons(newPersons);
            setNewFilter(newPersons);
          })
      }
  }

  const deletePerson = ( { id, name } ) => {
    if ( window.confirm( `Are you sure to delete ${name} from the phonebook ?` ) ) {
      personService
        .deletePerson( id )
        .then( () => {
          const newPersons = persons.filter( ( person ) => person.id !== id );
          setPersons( newPersons );
          setNewFilter( newPersons );
        } )
    }
  };


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
      <Persons filter={newFilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App
