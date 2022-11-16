const PersonForm = ({
  handleSubmit,
  handleNameChange,
  handleNumberChange,
  name,
  number
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      Name:{' '}
      <input
        name='Name'
        value={name}
        onChange={handleNameChange}
        placeholder='Write a name'
      />
      <br />
      Number:{' '}
      <input
        type='number'
        name='Number'
        value={number}
        onChange={handleNumberChange}
        placeholder='Write a number'
      />
    </div>
    <div>
      <button>add</button>
    </div>
  </form>
)

export default PersonForm