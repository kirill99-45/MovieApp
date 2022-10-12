import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './search.css';

export const Search = ({ setUsers, users, searchState, setSearchState }) => {

//----------------(!) Валидация формы, требует доработки (!) ---------//

  // const [errorState, setErrorState] = useState('search-error-hidden') // Состояние ошибки
  // const [timerState, setTimerState] = useState(false) // Состояние таймера
  // const [seconds, setSeconds] = useState(4) // Время отображения ошибки
  //
  // useEffect(() => {
  //   if (errorState === 'search-error-visible' && timerState === true && seconds > 0) {
  //     setTimeout(setSeconds, 1000, seconds - 1)
  //   } else {
  //     setTimerState(false);
  //     setErrorState('search-error-hidden')
  //     setSeconds(4)
  //   }
  // }, [errorState, timerState, seconds])

  const search = () => {
    const result = []
    if (searchState.trim().length === 0) {
      // setErrorState('search-error-visible')
      // setTimerState(true)
    } else {
      users.forEach(user => {
        if (user.firstName.toLowerCase() === searchState.trim().toLowerCase()
         || user.lastName.toLowerCase() === searchState.trim().toLowerCase()
         || user.id === searchState.trim()) {
          result.push(user)
        }
      });
      setUsers(result)
    }
  }

  const clearSearch = () => {
    setSearchState([])
    setUsers(users)
  }

  return (
    <div className='search__wrapper'>
      <form>
        <input
          type='text'
          value={searchState}
          onChange={(event) => setSearchState(event.target.value)}
          placeholder='Искать здесь...'
          className='search__input'
        />
      </form>
    </div>
  )
}
