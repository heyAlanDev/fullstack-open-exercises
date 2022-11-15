const Person = ({ name, number, styles }) => (
  <p style={{ ...styles }}>
    <span style={{ fontWeight: 'bold' }}>{name}:</span> {number}
  </p>
)

export default Person