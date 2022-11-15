import FilterResponse from "./FilterResponse"

const Filter = ({ persons, handleChange, search }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
  >
    <input
      onChange={handleChange}
      placeholder='Make your search'
      value={search}
    />
    <FilterResponse persons={persons} search={search} />
  </div>
)

export default Filter