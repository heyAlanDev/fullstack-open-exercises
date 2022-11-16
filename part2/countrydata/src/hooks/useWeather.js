import axios from 'axios'
import { useEffect, useState } from 'react'

export const useWeather = params => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then(response => {
        setWeather(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return { weather }
}
