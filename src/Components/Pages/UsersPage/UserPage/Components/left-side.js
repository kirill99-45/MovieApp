import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonSubscribe } from './button-subscribe.js';

export const LeftSide = ({ user }) => {

  const [btnSubscribersState, setBtnSubscribersState] = useState({ btn : '', btnTitle : '', titleForBtn : ' '})

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  useEffect(() => {
    isSubscriber(user.subscribers)
  }, [activeUser])

  const isSubscriber = (subscribers) => {
    for (let i = 0; i < subscribers.length; i++) {
      if (subscribers[i].id === activeUser.id) {
        return setBtnSubscribersState({ btn : 'btn-subscribed', btnTitle : 'Вы подписаны', titleForBtn : 'Отписаться' })
      }
      setBtnSubscribersState({ btn : 'btn-subscribe', btnTitle : 'Подписаться', titleForBtn : 'Подписаться' })
    }
  }

  return (
    <div className='profile__left-side'>
      <div className='profile__avatar'>
        <div className='avatar__wrapper'>
          <img src={user.mainPhoto} alt='Ваше изображение' />
        </div>
      </div>
      <ButtonSubscribe
        setBtnSubscribersState={setBtnSubscribersState}
        btnSubscribersState={btnSubscribersState}
        activeUser={activeUser}
        user={user}
      />
    </div>
  )
}
