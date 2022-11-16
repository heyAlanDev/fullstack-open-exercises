import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons }) => {
  const handleClick = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => alert(`${name} has been deleted successful`))
        .catch(err => console.log(err))
    }
  }

  return (
    <div>
      {persons.map(person => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          handleClick={() => handleClick(person.id, person.name)}
        />
      ))}
    </div>
  )
}

export default Persons
