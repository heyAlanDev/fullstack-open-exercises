import { useState } from 'react'

const Person = ({ name }) => <p>{name}</p>

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => (
      <Person key={person.name} name={person.name} />
    ))}
  </div>
)

const PersonForm = ({ handleSubmit, handleChange, name }) => (
  <form onSubmit={handleSubmit}>
    <div>
      Name:{' '}
      <input
        name='Person'
        value={name}
        onChange={handleChange}
        placeholder='Add a person'
      />
    </div>
    <div>
      <button>add</button>
    </div>
  </form>
)

const App = ({ dataPersons }) => {
  const [persons, setPersons] = useState(dataPersons)
  const [newName, setNewName] = useState('')

  const addPerson = event => {
    event.preventDefault()
    const PersonObject = {
      name: newName
    }

    setPersons(persons.concat(PersonObject))
    setNewName('')
  }

  const handlePersonChange = event => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        handleSubmit={addPerson}
        handleChange={handlePersonChange}
        name={newName}
      />
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <Persons persons={persons} />
    </div>
  )
}

export default App
