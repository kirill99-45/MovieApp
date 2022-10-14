import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeUserLogin, activeUserHandle } from 'C:/Users/User/github/movies/src/Redux/actions.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './css/auth.css';
import './css/media.css';

export const AuthWrapper = (props) => {

  const users = useSelector((state) => {
      return state.usersReducer
  })

  const dispatch = useDispatch()

  const [timer, setTimer] = useState(false)
  const [seconds, setSeconds] = useState(5)

  const [loginState, setLoginState] = useState({ className : 'authorization__login', value : ''})
  const [passwordState, setPasswordState] = useState({ className : 'authorization__password', value : '' })

  useEffect(() => {
    if (timer === true && seconds > 0) {
      setTimeout(setSeconds, 1000, seconds - 1)
    } else {
      setTimer(false)
      setSeconds(5)
      // setPasswordClassNameState('authorization__password')
      // setLoginClassNameState('authorization__login')
    }
  }, [setTimer, seconds])

  const getActiveUser = () => {
    dispatch(activeUserLogin(loginState.value, passwordState.value))
  }

  useEffect(() => {
    const closeAuth = (event) => {
      if (event.key === 'Escape') {
        dispatch(activeUserHandle())
      }
    }

    window.addEventListener('keydown', closeAuth)

    return () => {
      window.removeEventListener('keydown', closeAuth)
    }
  })

  return (
    <div className='layout-visible'>
      <div className='authorization__wrapper'>
        <form className='authorization__container'>
          <h1>Авторизация</h1>
          <span>Login</span>
          <input
            type='text'
            placeholder='Your login...'
            className={loginState.className}
            value={loginState.value}
            onChange={(event) => setLoginState({ ...loginState, value : event.target.value })}
          />
          <span>Password</span>
          <input type='password'
            className={passwordState.className}
            placeholder='Your password...'
            value={passwordState.value}
            onChange={(event) => setPasswordState({ ...passwordState, value : event.target.value })}
          />
          <button type='button' disabled={!loginState.value} onClick={getActiveUser}>Войти</button>
        </form>
        <FontAwesomeIcon icon={faXmark} className='auth__close' onClick={() => dispatch(activeUserHandle())}/>
      </div>
    </div>
  )
}
