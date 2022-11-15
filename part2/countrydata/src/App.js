import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
  }, [])

  const handleSearchChange = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <>
      <h1>Find Countries</h1>
      <Filter
        countries={countries}
        handleChange={handleSearchChange}
        search={search}
      />
    </>
  )
}

export default App
