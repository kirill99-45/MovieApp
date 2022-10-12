import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const AddNewComment = ({ activeUser, comments, post }) => {

  const dispatch = useDispatch()

  const [newCommentState, setNewCommentState] = useState({
    value : ``,
    className : 'post-page__comment-input',
  })

  const clearComment = () => {
    setNewCommentState({
      value : ``,
      className : 'post-page__comment-input',
    })
  }

  const newComment = () => {
    dispatch({ type : 'POSTS_ADD_COMMENT', payload : { text : newCommentState.value, user : activeUser, id : post.id } })
    setNewCommentState({
      value : ``,
      className : 'post-page__comment-input',
    })
  }

  return (
    <div className='post-page__add-comment'>
      <div className='comment__author-photo'>
        <img src={activeUser.mainPhoto} />
      </div>
      <div className='post-page__comment-container'>
        <textarea
          placeholder='Ваш комментарий'
          onChange={(e) => setNewCommentState({...newCommentState, value : e.target.value})}
          value={newCommentState.value}
          className={newCommentState.className}
          onClick={() => setNewCommentState({...newCommentState, className : 'post-page__comment-input-active'})}
        />
        <div className='add-comment__buttons-container'>
          <button className='post-page__comment-button-add' disabled={!newCommentState.value} onClick={newComment}>Отправить</button>
          <button className='post-page__comment-button-cancel' onClick={clearComment} >Отменить</button>
        </div>
      </div>
    </div>
  )
}
