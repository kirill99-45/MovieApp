import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotificationItem } from './notification-item.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-regular-svg-icons';
import './notifications.css';

export const Notifications = (props) => {

  const activeUser = props.activeUser

  const [notificationState, setNotificationState] = useState({
    className : 'notification__info-wrapper-hidden',
    boxShadow : '0px 0px 4px 1px #989292',
  })

  const showNotification = () => {
    if (notificationState.className === 'notification__info-wrapper-open') {
      activeUser.notifications.length = 0
      setNotificationState({
        className : 'notification__info-wrapper-hidden',
        boxShadow : '0px 0px 4px 1px #989292',
      })
    } else {
      setNotificationState({
        className : 'notification__info-wrapper-open',
        boxShadow : '0px 0px 4px 1px #14e08b',
      })
    }
  }

  const NotificationsContainer = ({ activeUser, user }) => {
    if (activeUser.id && activeUser.notifications.length > 0) {
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
        // activeUser.notifications.length = 0
        setNotificationState({
          className : 'notification__info-wrapper-hidden',
          boxShadow : '0px 0px 4px 1px #989292',
        })
      }
    }

    window.addEventListener('click', isNotificationClick)

    return () => {
      window.removeEventListener('click', isNotificationClick)
    }
  })

  if (activeUser.id) {
    return (
      <div className='notification__wrapper'>
        <div className='notification'
          onClick={showNotification}
          style={{ boxShadow: notificationState.boxShadow }}
        >
          <FontAwesomeIcon icon={faBell} className='notification__bell' size='lg'/>
          { activeUser.notifications.length > 0 ? <span>{activeUser.notifications.length}</span> : <></> }
        </div>
        <div className={notificationState.className}>
          <NotificationsContainer activeUser={activeUser}/>
        </div>
      </div>
    )
  }
}
