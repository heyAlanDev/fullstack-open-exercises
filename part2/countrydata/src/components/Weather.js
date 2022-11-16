export const Weather = ({ weather, capital, name }) => (
  <div>
    <h3>Weather in {capital}</h3>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row-reverse'
      }}
    >
      <div>
        <img
          src={`${weather.current?.weather_icons}`}
          alt={`${weather.current?.weather_descriptions} in ${name.common}`}
        />
        <br />
        <small style={{ fontWeight: 'bold' }}>
          {weather.current?.weather_descriptions}
        </small>
      </div>
      <div>
        <p>
          <span style={{ fontWeight: 'bold' }}>Temperature:</span>
          {weather.current?.temperature} Celsius
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Wind:</span>
          {weather.current?.wind_speed} mph direction {weather.current?.wind_dir}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Local time:</span>
          {weather.location?.localtime}
        </p>
      </div>
    </div>
  </div>
)