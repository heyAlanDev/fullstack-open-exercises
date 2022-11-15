const Country = ({ name, capital, population, languages, flag,handleClose }) => {
  return (
    <div>
      <h2>{name} <button onClick={handleClose}>close</button></h2> 
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(languages).map(language => (
          <li>{language}</li>
        ))}
      </ul>
      <div>
        <img src={`${flag}`} alt={`${name.common}'s flag`} />
      </div>
    </div>
  )
}

export default Country
