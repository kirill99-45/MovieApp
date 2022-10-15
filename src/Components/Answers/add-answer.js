import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postsAddAnswer } from './../../Redux/actions.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const AddAnswer = (props) => {

  console.log(props);

  const { activeUser, answerCommentState, setAnswerCommentState, clearAnswer,
    showAnswer, comment, answer, postID, author } = props

  const dispatch = useDispatch()

  const addAnswer = () => {
    dispatch(postsAddAnswer(postID, comment, activeUser, answerCommentState.value, answer ? answer : null, answer ? answer.author : comment.author))
    // dispatch({
    //   type : 'POSTS_ADD_ANSWER',
    //   payload : {
    //     text : answerCommentState.value,
    //     post : postID,
    //     comment: comment,
    //     answer : answer ? answer : null,
    //     author : activeUser,
    //     consumer : answer ? answer.author : comment.author
    //   }
    // })
    setAnswerCommentState({
      value : '',
      containerClassName : 'post-page__comment-answer',
      inputClassName : 'post-page__comment-input',
    })
  }

  return (
    <div className='post-page__comment-answer-active'>
      <div className='comment__author-photo'>
        <img src={activeUser?.mainPhoto} />
      </div>
      <div className='post-page__comment-container'>
        <div className='post-page__comment-consumer'>
          <FontAwesomeIcon icon={ faArrowRight }/>
          <span>{author.firstName} {author.lastName}</span>
        </div>
        <textarea
          value={answerCommentState.value}
          onChange={(e) => setAnswerCommentState({...answerCommentState, value : e.target.value })}
          onClick={() => setAnswerCommentState({...answerCommentState, inputClassName : 'post-page__comment-input-active'})}
          placeholder='Ваш ответ...'
          className={answerCommentState.inputClassName}
        />
        <div className='add-comment__buttons-container'>
          <button className='post-page__comment-button-add' disabled={!answerCommentState.value} onClick={addAnswer}>Отправить</button>
          <button className='post-page__comment-button-cancel' onClick={clearAnswer}>Отменить</button>
        </div>
      </div>
    </div>
  )
}
