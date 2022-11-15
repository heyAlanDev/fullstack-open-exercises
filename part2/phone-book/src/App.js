import  axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const PersonObject = {
      name: newName,
      number: newNumber
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

      <h2>Add new person</h2>
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
