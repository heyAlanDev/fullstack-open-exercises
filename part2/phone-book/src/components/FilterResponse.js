import Person from './Person'

const FilterResponse = ({ persons, search, handleDelete }) => {
  const regExpSearch = new RegExp(search, 'i')

  if (!search) return undefined
  return persons
    .filter(({ name }) => regExpSearch.test(name))
    .map(({ name, number, id }) => (
      <Person
        key={number}
        name={name}
        styles={{ textAlign: 'end' }}
        number={number}
        handleClick={() => handleDelete(id, name)}
      />
    ))
}

export default FilterResponse
