import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import { Notification } from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)

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
      const personToUpdate = persons.find(
        person => person.name === personObject.name
      )

      return personService
        .update(personToUpdate.id, personObject)
        .then(returnedPerson => {
          setPersons(
            persons.map(person =>
              person.id !== personToUpdate.id ? person : returnedPerson
            )
          )
          setMessage({
            message: `Updated '${returnedPerson.name}'`,
            type: 'good'
          })
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setMessage({
            message: `Information of '${personToUpdate.name}' was already removed from server`,
            type: 'error'
          })
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== personToUpdate.id))
        })
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage({ message: `Added '${returnedPerson.name}'`, type: 'good' })
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
      .catch(err => {
        setMessage({
          message: err.response.data.error,
          type: 'error'
        })
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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
      personService.remove(id).then(() => {
        setMessage({
          message: `${name} has been deleted successful`,
          type: 'good'
        })
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Phonebook</h1>
        <Filter
          handleChange={handleSearch}
          persons={persons}
          search={search}
          handleDelete={handleDeletePerson}
        />
      </div>
      <Notification message={message} />

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
