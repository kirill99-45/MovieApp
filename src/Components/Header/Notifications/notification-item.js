import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NotificationItem = (props) => {

  const activeUser = props.activeUser
  const getSubsrcibe = props.getSubscribe

  const getSexSubscribe = (item) => {
    if (item.sex === 'man') {
      return 'подписался'
    } return 'подписалась'
  }

  const getSexLike = (item) => {
    if (item.sex === 'woman') {
      return `${item.firstName.slice(0, -1)}е`
    } return `${item.firstName}у`
  }

  const GetButton = ({ item }) => {
    for (let i = 0; i < activeUser.subscribs.length; i++) {
      let user = activeUser.subscribs[i]
      if (user.id === item.user.id) {
        return (
          <button>Подписаться в ответ</button>
        )
      }
    } return (
      <button type='button'><Link to={{ pathname : `/users/${item.user.id}` }}>Подписаться в ответ</Link></button>
    )
  }

   return activeUser.notifications.map(item => { // В зависимости от типа действия рисуем ту или иную разметку
    if (item.action === 'Subscribe') {
      return (
        <div className='notification__item-wrapper'>
          <div className='notification__item__img-container'>
            <Link to={{ pathname : `/users/${item.user.id}` }}>
              <img src={item.user.mainPhoto} />
            </Link>
          </div>
          <div className='notification__item__body-container'>
            <div className='notification__item__body-text'>
              <div><Link to={{ pathname : `/users/${item.user.id}` }}>{item.user.firstName}</Link> {getSexSubscribe(item.user)} на вас.</div>
            </div>
            <div className='notification__item__body-btn-container'>
              <GetButton item={item}/>
            </div>
          </div>
        </div>
      )
    } else if (item.action === 'Like') {
      return (
        <div className='notification__item-wrapper'>
          <div className='notification__item__img-container'>
            <Link to={{ pathname : `/users/${item.user.id}` }}>
              <img src={item.user.mainPhoto} />
            </Link>
          </div>
          <div className='notification__item__body-container'>
            <div className='notification__item__body-text'>
              <div><Link to={{ pathname : `/users/${item.user.id}` }}>{getSexLike(item.user)}</Link> понравилась ваша фотография</div>
            </div>
          </div>
        </div>
      )
    }
  })
}
