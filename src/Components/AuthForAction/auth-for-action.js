import { useDispatch } from 'react-redux';
import { activeUserHandle } from './../../Redux/actions.js';

export const AuthForAction = () => {

  const dispatch = useDispatch()

  return (
    <button className='action-of-anonim' onClick={() => dispatch(activeUserHandle())}>
      Авторизоваться
    </button>
  )
}
