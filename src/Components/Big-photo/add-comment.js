import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeUserOpen } from 'C:/Users/User/github/movies/src/Redux/actions.js';

export const AddComment = ({ comments, activeUser }) => {

  const dispatch = useDispatch()

  const [comment, setComment] = useState('')
  const months = ['янв', 'февр', 'март', 'апр', 'мая', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек']

  const addComment = () => {
    if (comment.trim().length > 0) {
      const checkZero = (number) => {
        if (number < 10) {
          return `0${number}`
        } return number
      }

      let date = new Date()
      const month = months[date.getMonth()]
      const day = checkZero(date.getDate())
      const year = date.getFullYear()

      const newDate = `${day} ${month} ${year}`

      // photoAddComment(comment, activeUser, comments, newDate)
      setComment('')
    }
  }

  if (activeUser.id) {
    return (
      <div className='addComment'>
        <img src={activeUser.mainPhoto} />
        <textarea className='photo__add-comment' value={comment} onChange={(event) => setComment(event.target.value)} placeholder='Оставьте комментарий'/>
        <button type='button' className='big-photo__btn' onClick={() => console.log('hey')}>Отправить</button>
      </div>
    )
  } return (
    <div className='photo__add-comment__anonim' onClick={() => dispatch(activeUserOpen())}>
      <span>Авторизоваться</span>
    </div>
  )
}
