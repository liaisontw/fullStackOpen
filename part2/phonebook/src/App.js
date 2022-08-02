import { useState } from 'react'

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
    console.log( event.target.value );
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

  //<div>debug: {newName}</div>

  return (
    <div>
      
      <h2>Phonebook</h2>
      <div>
          filter shown with<input 
            value={newSearch}
            onChange={handleNewFilter}
          />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameKeyin}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberKeyin}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {newFilter.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App
