import FilterResponse from './FilterResponse'

const Filter = ({ countries, handleChange, search }) => (
  <div>
    <input
      onChange={handleChange}
      placeholder='Make your search'
      value={search}
    />
    <FilterResponse countries={countries} search={search} />
  </div>
)

export default Filter
