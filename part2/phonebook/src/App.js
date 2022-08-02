import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [ newName,   setNewName   ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const addPerson = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: newNumber
    }
    let found = false;
    persons.forEach( person => { 
      //found = JSON.stringify( person ) === JSON.stringify( noteObject );
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
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  //<div>debug: {newName}</div>

  return (
    <div>
      
      <h2>Phonebook</h2>
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
        {persons.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App
