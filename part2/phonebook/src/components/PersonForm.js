const PersonForm = ( { addPerson, 
                       newName,   handleNameKeyin, 
                       newNumber, handleNumberKeyin } ) => {
    return(
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
    )
}

export default PersonForm;