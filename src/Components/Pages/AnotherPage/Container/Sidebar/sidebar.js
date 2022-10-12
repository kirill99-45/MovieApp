import Box from './Box/box.js';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faBookOpenReader, faUsers, faServer, faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import { SidebarOptions } from './sidebar-options.js';
import { SidebarUser } from './sidebar-user.js';
import './sidebar.css';

export const Sidebar = ({ activeUser }) => {

  const options = useSelector((state) => {
    return state.sidebarReducer
  })


  const [sidebarState, setSidebarState] = useState({
    wrapper : 'new-sidebar',
    user : 'sidebar__user-container',
  })

  const getSidebar = () => {
    if (sidebarState.wrapper === 'new-sidebar') {
      setSidebarState({ wrapper : 'new-sidebar-active', user : 'sidebar-active__user-container'})
    } else {
      setSidebarState({ wrapper : 'new-sidebar', user : 'sidebar__user-container'})
    }
  }

  useEffect(() => {
    const setState = (event) => {
      if (!event.target.closest('.new-sidebar-active')) {
        setSidebarState({ wrapper : 'new-sidebar', user : 'sidebar__user-container'})
      }
    }

    window.addEventListener('click', setState)

    return () => {
      window.removeEventListener('click', setState)
    }
  })

  const [themeState, setThemeState] = useState({
    className : 'sidebar__checkbox-label',
    checked : false,
  })

  const getTheme = () => {
    if (themeState.checked === false) {
      setThemeState({
        className : 'sidebar__checkbox-label-active',
        checked : true,
      })
    } else {
      setThemeState({
        className : 'sidebar__checkbox-label',
        checked : false,
      })
    }
  }

  return (
    <div className='sidebar__wrapper'>
      <ul className={sidebarState.wrapper}>
        <button className='new-sidebar__button' onClick={getSidebar}>
          <FontAwesomeIcon icon={faBars} className='new-sidebar__btn-icon' title='Открыть'/>
        </button>
        <SidebarOptions options={options} setSidebarState={setSidebarState} activeUser={activeUser}/>
        <div className='sidebar__item-wrapper' onClick={getTheme}>
          <FontAwesomeIcon icon={faMoon} className='sidebar__icon' title='Сменить тему'/>
          <label htmlFor='theme' className={themeState.className}/>
          <input type='checkbox' id='theme' className='sidebar__checkbox' checked={themeState.checked} onChange={getTheme}/>
        </div>
        { activeUser.id ? <SidebarUser activeUser={activeUser} sidebarState={sidebarState}/> : ''}
      </ul>
    </div>
  )
}
