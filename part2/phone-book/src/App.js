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

    if (
      persons.find(person => person.name === personObject.name) &&
      window.confirm(
        `${personObject.name} is already added to phonebook, replace the old number with a new number`
      )
    ) {
      const id = persons.find(person => person.name === personObject.name).id

      return personService.update(id, personObject).then(returnedPerson => {
        setPersons(
          persons.map(person => (person.id !== id ? person : returnedPerson))
        )
        setNewName('')
        setNewNumber('')
      })
    }

    personService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
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

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => alert(`${name} has been deleted successful`))
        .catch(err => console.log(err))
      setPersons(persons.filter(p => p.id !== id))
    }
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
        number={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={handleDeletePerson} />
    </div>
  )
}

export default App
