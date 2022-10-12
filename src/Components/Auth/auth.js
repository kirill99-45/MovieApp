import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './css/auth.css';
import './css/media.css';

export const Auth = ({ layoutState, setLayoutState, setActiveUser, activeUser }) => {

  const users = useSelector((state) => {
      return state.usersReducer
  })

  const [timer, setTimer] = useState(false)
  const [seconds, setSeconds] = useState(5)

  const [loginState, setLoginState] = useState({ className : 'authorization__login', value : ''})
  const [passwordState, setPasswordState] = useState({ className : 'authorization__password', value : '' })

  const getUser = () => {
    for (let i = 0; i < users.length; i++) {
      let user = users[i]
      if (user.account.login === loginState.value && user.account.password === passwordState.value) {
        setActiveUser(user)
        setLayoutState('layout-hidden')
      } else if (user.account.login === loginState && user.account.password !== passwordState) {
        // setPasswordClassNameState('authorization__password-error')
        setTimer(true)
      }
    }
    // setLoginClassNameState('authorization__login-error')
    setTimer(true)
  }

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

  return (
    <div className={layoutState}>
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
          <button type='button' disabled={!loginState.value} onClick={getUser}>Войти</button>
        </form>
        <FontAwesomeIcon icon={faXmark} className='auth__close' onClick={() => setLayoutState('layout-hidden')}/>
      </div>
    </div>
  )
}
