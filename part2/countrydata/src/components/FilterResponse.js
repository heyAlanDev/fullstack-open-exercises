import { useState } from 'react'
import Country from './Country'

const FilterResponse = ({ countries, search }) => {
  const [country, setCountry] = useState(null)
  const regExpSearch = new RegExp(search, 'i')

  const handleMoreClick = thisCountry => setCountry(thisCountry)
  const handleCloseClick = () => setCountry(null)

  const countriesFiltered = countries.filter(country =>
    regExpSearch.test(country.name.common)
  )

  if (!search) return undefined

  if (countriesFiltered.length > 10)
    return <p>Too many matches, be more specific in your search</p>

  if (country)
    return (
      <>
        <Country
          key={country.name.common}
          capital={country.capital}
          flag={country.flags.png}
          languages={country.languages}
          name={country.name.common}
          population={country.population}
          handleClose={handleCloseClick}
        />
      </>
    )

  let countriesFounds =
    countriesFiltered.length === 1
      ? countriesFiltered.map(country => (
          <Country
            key={country.name.common}
            capital={country.capital}
            flag={country.flags.png}
            languages={country.languages}
            name={country.name.common}
            population={country.population}
          />
        ))
      : countriesFiltered.map(country => (
          <div key={country.name.common}>
            {country.name.common}{' '}
            <button onClick={() => handleMoreClick(country)}>more</button>
          </div>
        ))

  return countriesFounds
}

export default FilterResponse
