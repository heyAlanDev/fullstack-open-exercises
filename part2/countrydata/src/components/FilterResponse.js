import Country from './Country'

const FilterResponse = ({ countries, search }) => {
  const regExpSearch = new RegExp(search, 'i')

  if (!search) return undefined

  const countriesFiltered = countries.filter(country =>
    regExpSearch.test(country.name.common)
  )


  let countriesFounds =
    countriesFiltered.length === 1
      ? countriesFiltered.map(country => (
          <Country
            key={country.flags.png}
            capital={country.capital}
            flag={country.flags.png}
            languages={country.languages}
            name={country.name.common}
            population={country.population}
          />
        ))
      : countriesFiltered.map(country => (
          <p key={country.flags.png}>{country.name.common}</p>
        ))

  console.log(countriesFounds)
  if (countriesFounds.length > 10)
    return <p>Too many matches, be more specific in your search</p>

  return countriesFounds
}

export default FilterResponse
