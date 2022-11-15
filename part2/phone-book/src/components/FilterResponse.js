import Person from "./Person"

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

export default FilterResponse
