export default function Persons({filter}) {
    return(
        <ul>
            {filter.map(person =>
            <li key={person.name}>{person.name} {person.number}</li>
            )}
        </ul>
    )
}