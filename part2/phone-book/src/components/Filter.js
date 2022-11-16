import FilterResponse from './FilterResponse'

const Filter = ({ persons, handleChange, search, handleDelete }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
  >
    <input
      onChange={handleChange}
      placeholder='Make your search'
      value={search}
    />
    <FilterResponse
      persons={persons}
      search={search}
      handleDelete={handleDelete}
    />
  </div>
)

export default Filter
