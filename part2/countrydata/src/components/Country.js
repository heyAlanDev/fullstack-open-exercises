import configVariables from '../config.json'
import { Weather } from './Weather'
import { useWeather } from '../hooks/useWeather'

const Country = ({
  name,
  capital,
  population,
  languages,
  flag,
  handleClose
}) => {
  const { weather } = useWeather({
    access_key: configVariables.REACT_APP_API_KEY,
    query: capital[0]
  })

  return (
    <div>
      <h2>
        {name} <button onClick={handleClose}>close</button>
      </h2>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <div>
        <img src={`${flag}`} alt={`${name.common}'s flag`} />
      </div>
      {weather ? (
        <Weather weather={weather} name={name} capital={capital} />
      ) : null}
    </div>
  )
}

export default Country
