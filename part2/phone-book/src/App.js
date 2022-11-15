import { useState } from 'react'

const Person = ({ name, number, styles }) => (
  <p style={{ ...styles }}>
    <span style={{ fontWeight: 'bold' }}>{name}:</span> {number}
  </p>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => (
      <Person key={person.number} name={person.name} number={person.number} />
    ))}
  </div>
)

const Filter = ({ persons, handleChange, search }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
  >
    <input
      onChange={handleChange}
      placeholder='Make your search'
      value={search}
    />
    <FilterResponse persons={persons} search={search} />
  </div>
)

const FilterResponse = ({ persons, search }) => {
  const regExpSearch = new RegExp(search, 'i')

  if (!search) return undefined
  return persons
    .filter(({ name }) => regExpSearch.test(name))
    .map(({ name, number }) => (
      <Person
        key={number}
        name={name}
        styles={{ textAlign: 'end' }}
        number={number}
      />
    ))
}

const PersonForm = ({
  handleSubmit,
  handleNameChange,
  handleNumberChange,
  name,
  number
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      Name:{' '}
      <input
        name='Name'
        value={name}
        onChange={handleNameChange}
        placeholder='Write a name'
      />
      <br />
      Number:{' '}
      <input
        type='number'
        name='Number'
        value={number}
        onChange={handleNumberChange}
        placeholder='Write a number'
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
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = event => {
    event.preventDefault()
    const PersonObject = {
      name: newName,
      Number: newNumber
    }

    if (
      persons
        .map(person => JSON.stringify(person))
        .includes(JSON.stringify(PersonObject))
    )
      return alert(`${PersonObject.name} is already added to Numberbook`)

    setPersons(persons.concat(PersonObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNamePersonChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberPersonChange = event => {
    setNewNumber(event.target.value)
  }

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Phonebook</h2>
        <Filter handleChange={handleSearch} persons={persons} search={search} />
      </div>

      <PersonForm
        handleSubmit={addPerson}
        handleNameChange={handleNamePersonChange}
        handleNumberChange={handleNumberPersonChange}
        name={newName}
        Number={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
