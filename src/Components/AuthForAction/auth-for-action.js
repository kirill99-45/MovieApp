import { useDispatch } from 'react-redux';
import { activeUserOpen } from './../../Redux/actions.js';

export const AuthForAction = () => {

  const dispatch = useDispatch()

  return (
    <button className='action-of-anonim' onClick={() => dispatch(activeUserOpen())}>
      Авторизоваться
    </button>
  )
}
