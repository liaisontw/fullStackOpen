import { useState } from 'react'
import Filter     from './components/Filter'
import Persons    from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',      number: '040-123456',    id: 1 },
    { name: 'Ada Lovelace',     number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov',      number: '12-43-234345',  id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName,   setNewName   ] = useState( '' );
  const [ newNumber, setNewNumber ] = useState( '' );
  const [ newSearch, setNewSearch ] = useState( '' );
  const [ newFilter, setNewFilter ] = useState( persons );

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
      let found = false;
      persons.forEach( person => { 
          found = person.name === noteObject.name;
      } ) ;
      if ( found ) {
          alert(`${newName} is already added to phonebook`);
      } else {
          setPersons(persons.concat(noteObject));
          setNewName('');
          setNewNumber('');
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
