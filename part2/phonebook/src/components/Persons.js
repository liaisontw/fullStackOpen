const Persons = ( { filter, deletePerson } ) => {
    return filter.map ( ( person ) => 
        <p key={person.id}>
            {person.name} {person.number} <button 
                onClick={() => deletePerson( person )}
            > delete </button>
        </p>
    )
    
};

export default Persons;