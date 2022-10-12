import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Filter = ({ filterState, setFilterState, activeUser }) => {

  if (activeUser) {
    return (
    <div className='users__filter-wrapper'>
      <div className='users__radio-wrapper'>
        <input
          type='radio'
          name='users'
          id='all-users'
          value='1'
          onChange={(event) => setFilterState(event.target.value)}
          checked={filterState === '1' ? true : false}
          // className='users__filter-radio'
        />
        <label for='all-users' className='users__filter-label'>
          <FontAwesomeIcon icon={faCheck} title='Перейти' className='users__radio-icon'/>
          <span>Все пользователи</span>
        </label>
      </div>
        <div className='users__radio-wrapper'>
         <input
           type='radio'
           name='users'
           id='user-follow'
           value='2'
           onChange={(event) => setFilterState(event.target.value)}
           checked={filterState === '2' ? true : false}
         />
         <label for='user-follow' className='users__filter-label'>
          <FontAwesomeIcon icon={faCheck} title='Перейти' className='users__radio-icon'/>
          <span>Мои подписчики</span>
         </label>
        </div>
      <div className='users__radio-wrapper'>
         <input
             type='radio'
             name='users'
             id='user-followers'
             value='3'
             onChange={(event) => setFilterState(event.target.value)}
             checked={filterState === '3' ? true : false}
             // className='users__filter-radio'
           />
         <label for='user-followers' className='users__filter-label'>
          <FontAwesomeIcon icon={faCheck} title='Перейти' className='users__radio-icon'/>
          <span>Я подписан</span>
         </label>
        </div>
    </div>
    )
  }
}
