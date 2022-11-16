import Person from './Person'

const Persons = ({ persons, handleDelete }) => {
  

  return (
    <div>
      {persons.map(person => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          handleClick={() => handleDelete(person.id, person.name)}
        />
      ))}
    </div>
  )
}

export default Persons
