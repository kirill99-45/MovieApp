import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeUserHandle } from './../../Redux/actions.js';
import axios from 'axios';
import { Navigation } from './Navigation/navigation.js';
import { Weather } from './Weather/weather.js';
import { Currency } from './Currency/currency.js';
import { Notifications } from './Notifications/notifications.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export const Header = () => {

  const [cityName, setCityName] = useState('Новосибирск')
  const [searchState, setSearchState] = useState('')

  const ActiveUser = () => {
    if (activeUser.id) {
      setCityName(activeUser.city)
      return (
        <div className='active-user'>
          <span>{activeUser.firstName} </span>
          <span>{activeUser.lastName}</span>
        </div>
      )
    } return <span>Авторизация</span>
  }

  const dispatch = useDispatch()

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  return (
    <div className='header'>
      { activeUser.id && <Notifications /> }
      <div className='weather__wrapper'>
        <div className='search-city'>
          <input type='text'
            maxLength='25'
            placeholder='Искать здесь...'
            className='input__search-city'
            value={searchState}
            onChange={(event) => setSearchState(event.target.value)}
          />
          <button type='button' onClick={() => setCityName(searchState.trim())}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='weather__search'/>
          </button>
        </div>
        <div className='display-weather'>
          <Weather cityName={cityName}/>
        </div>
      </div>
      <Currency />
      <div className='log__wrapper' onClick={() => dispatch(activeUserHandle())}>
        <ActiveUser />
        <div className='icon__container'>
          <FontAwesomeIcon icon={faCircleRight} title='Войти' className='log__icon'/>
        </div>
      </div>
    </div>
  )
}
