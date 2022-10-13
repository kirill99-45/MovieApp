import { useDispatch } from 'react-redux';
import { activeUserOpen } from 'C:/Users/User/github/movies/src/Redux/actions.js';

export const ButtonSubscribe = (props) => {

  const { activeUser, setBtnSubscribersState, btnSubscribersState, user} = props

  const dispatch = useDispatch()

  const getSubsrcibe = () => {
    if (!activeUser.id) {
      dispatch(activeUserOpen())
    } else {
      if (btnSubscribersState.btn === 'btn-subscribed') {
        setBtnSubscribersState({ btn : 'btn-subscribe', btnTitle : 'Подписаться', titleForBtn : 'Подписаться' })
      } else {
        setBtnSubscribersState({ btn : 'btn-subscribed', btnTitle : 'Вы подписаны', titleForBtn : 'Отписаться' })
      }
    }
  }

  return (
    <button
      className={btnSubscribersState.btn}
      title={btnSubscribersState.btnTitle}
      type='button'
      onClick={getSubsrcibe}
    >
      {btnSubscribersState.titleForBtn}
    </button>
  )
}
