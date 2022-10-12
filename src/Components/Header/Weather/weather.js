import { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';

export const Weather = ({ cityName }) => {

  const key = '10d6415c543fbe92fc4c0547e0d5dbd8';

  const [searchCityState, setSearchCityState] = useState({ loading : false, temp : 0 })
  const [city, setCity] = useState({ loading : false, lon : null, lat : null })

  useEffect(() => {
    setCity({ loading : true })
    setSearchCityState({ loading : true })
    if (cityName.trim().length > 0) {
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`)
      .then(resp => {
        const name = resp.data[0].local_names.ru
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${resp.data[0].lat}&lon=${resp.data[0].lon}&appid=${key}`)
        .then(resp => {
          setSearchCityState({ loading: false, temp : resp.data.main.temp, name : name, icon : resp.data.weather[0].icon})
        })
      })
    } else {
      setCity({ loading : false, empty : null })
      setSearchCityState({ loading : false, empty : null })
    }
  }, [setCity, setSearchCityState, cityName])

  if (searchCityState.loading === false && searchCityState.empty === undefined) {
    return (
      <div className='temp__container'>
      <img src={`http://openweathermap.org/img/wn/${searchCityState.icon}@2x.png`} />
        <div className='description'>
          <span>{searchCityState.name}</span>
          <span className='temp'>{(searchCityState.temp - 273.15).toFixed(1)}</span>
        </div>
      </div>
    )
  } else if (searchCityState.loading === true) {
      return (
      <div className='temp__container'>
        <span>Loading</span>
      </div>
    )
  } else if (searchCityState.loading === false) {
    return (
    <div className='temp__container'>
      <span>Задан пустой запрос</span>
    </div>
    )
  }
}
