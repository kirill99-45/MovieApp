import { useEffect, useState } from 'react';
import { ButtonSubscribe } from './button-subscribe.js';

export const LeftSide = (props) => {

  const [btnSubscribersState, setBtnSubscribersState] = useState({ btn : '', btnTitle : '', titleForBtn : ' '})

  useEffect(() => {
    isSubscriber(props.user.subscribers)
  }, [props.activeUser])

  const isSubscriber = (subscribers) => {
    for (let i = 0; i < subscribers.length; i++) {
      if (subscribers[i].id === props.activeUser.id) {
        return setBtnSubscribersState({ btn : 'btn-subscribed', btnTitle : 'Вы подписаны', titleForBtn : 'Отписаться' })
      }
      setBtnSubscribersState({ btn : 'btn-subscribe', btnTitle : 'Подписаться', titleForBtn : 'Подписаться' })
    }
  }

  return (
    <div className='profile__left-side'>
      <div className='profile__avatar'>
        <div className='avatar__wrapper'>
          <img src={props.user.mainPhoto} alt='Ваше изображение' style={{ backgroundColor : props.color }}/>
        </div>
      </div>
      <ButtonSubscribe
        getSubscribed={props.getSubscribed}
        unSubscribe={props.unSubscribe}
        setBtnSubscribersState={setBtnSubscribersState}
        btnSubscribersState={btnSubscribersState}
        activeUser={props.activeUser}
        setLayoutState={props.setLayoutState}
        user={props.user}
      />
    </div>
  )
}
