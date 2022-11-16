const Person = ({ name, number, styles, handleClick }) => (
  <p style={{ ...styles }}>
    <span style={{ fontWeight: 'bold' }}>{name}:</span> {number}
    {'  '}
    <button onClick={handleClick}>Delete</button>
  </p>
)

export default Person
