import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './add-comment.css';

const AddComment = ({ activeUser, setLayoutState, film }) => {

  const [inputState, setInputState] = useState('')

  const dispatch = useDispatch()

  const months = ['янв', 'февр', 'март', 'апр', 'мая', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек']

  const addComment = () => {

    const checkZero = (date) => {
      if (date < 10) {
        date = `0${date}`
      }
      return date
    }

    let date = new Date();

    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const day = checkZero(date.getDate())


    date = `${day} ${month} ${year}`

    if (inputState.trim().length > 0) {
      dispatch({ type : 'FILMS_ADD_COMMENT', payload : { text : inputState, date : date, user : activeUser, film : film.id } })
      setInputState('')
    }
  }

  if (activeUser.id) {
    return (
      <div className='film__add-comment-wrapper'>
        <div className='film__addComment_author_image'>
          <img src={activeUser.mainPhoto} />
        </div>
        <textarea
          className='film__add-comment'
          placeholder='Оставьте комментарий...'
          value={inputState}
          onChange={(event) => setInputState(event.target.value)}
        />
        <button type='button' onClick={addComment}>Отправить</button>
      </div>
    )
  } return (
    <span className='film__add-comment__anonim' onClick={() => setLayoutState('layout-visible')}>
      Авторизоваться
    </span>
  )
}

export default AddComment;
