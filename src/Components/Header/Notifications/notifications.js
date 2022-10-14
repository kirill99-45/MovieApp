import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NotificationItem } from './notification-item.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { notificationsHandler, notificationsCLose } from './../../../Redux/actions.js';
import './notifications.css';

export const Notifications = () => {

  const notifications = useSelector(state => {
    return state.activeUserReducer.user.notifications
  })

  const isOpen = useSelector(state => {
    return state.notificationsReducer.isOpen
  })

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  const dispatch = useDispatch()

  const NotificationsContainer = () => {
    if (notifications.length > 0) {
      return <NotificationItem activeUser={activeUser}/>
    } return (
      <div className='no-notifications__wrapper'>
        <span className='no-notifications-text'>Пока ничего нового</span>
      </div>
    )
  }

  useEffect(() => {
    const isNotificationClick = (event) => {
      if (!event.target.closest('.notification__wrapper')) {
        dispatch(notificationsCLose())
      }
    }

    window.addEventListener('click', isNotificationClick)

    return () => {
      window.removeEventListener('click', isNotificationClick)
    }
  })

  const NotificationMoreInfo = () => {
    return (
      <div className='notification__info-wrapper-open'>
        <NotificationsContainer />
      </div>
    )
  }

  return (
    <div className='notification__wrapper'>
      <div className='notification' onClick={() => dispatch(notificationsHandler())}>
        <FontAwesomeIcon icon={faBell} className='notification__bell' size='lg'/>
        { notifications.length > 0 && <span>{notifications.length}</span> }
      </div>
      { isOpen && <NotificationMoreInfo /> }
    </div>
  )
}
