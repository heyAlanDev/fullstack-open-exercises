import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.find(person => person.name === personObject.name))
      return alert(`${personObject.name} is already added to Numberbook`)

    personService.create(personObject).then(returnedPersons => {
      setPersons(persons.concat(returnedPersons))
      setNewName('')
      setNewNumber('')
    })
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
