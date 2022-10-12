import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigation } from './Navigation/navigation.js';
import { Weather } from './Weather/weather.js';
import { Currency } from './Currency/currency.js';
import { Notifications } from './Notifications/notifications.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export const Header = ({ activeUser, layoutState, setLayoutState, getSubscribe }) => {

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
    } return (
      <span>
        Авторизация
      </span>
    )
  }

  return (
    <div className='header'>
      <Notifications activeUser={activeUser} getSubscribe={getSubscribe}/>
      <div className='weather__wrapper'>
        <div className='search-city'>
          <input type="text" maxLength='25' placeholder='Искать здесь...' className='input__search-city' value={searchState} onChange={(event) => setSearchState(event.target.value)}/>
          <button type='button' onClick={() => setCityName(searchState.trim())}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='weather__search'/>
          </button>
        </div>
        <div className='display-weather'>
          <Weather cityName={cityName}/>
        </div>
      </div>
      <Currency />
      <div className='log__wrapper' onClick={() => layoutState === 'layout-visible' ? setLayoutState('layout-hidden') : setLayoutState('layout-visible')}>
        <ActiveUser layoutState={layoutState} setLayoutState={setLayoutState}/>
        <div className='icon__container'>
          <FontAwesomeIcon icon={faCircleRight} title='Войти' className='log__icon'/>
        </div>
      </div>
    </div>
  )
}
