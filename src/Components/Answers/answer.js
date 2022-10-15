import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBookmark, faPlus, faMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AddAnswer } from './add-answer.js';
import './answers.css';

export const Answers = ({ comment, answer, postID, author }) => {

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  const dispatch = useDispatch()

  const getColor = (value) => {
    return value > 0 ? 'green' : 'red';
  }

  const [answerCommentState, setAnswerCommentState] = useState({
    value : '',
    isOpen : false,
    inputClassName : 'post-page__comment-input'
  })

  const showAnswer = () => {
    setAnswerCommentState({
      ...answerCommentState,
      isOpen : !answerCommentState.isOpen})
  }

  const currentPath = window.location.pathname

  const CommentConsumer = () => {
    return (
      <div className='post-page__comment-consumer'>
        <FontAwesomeIcon icon={ faArrowRight }/>
        <Link to={ activeUser?.id !== answer.consumer.id ? `../users/${answer.consumer.id}` : '../profile' }>
          {answer.consumer.firstName} {answer.consumer.lastName}
        </Link>
      </div>
    )
  }

  const clearAnswer = () => {
    setAnswerCommentState({
      value : '',
      isOpen : false,
      inputClassName : 'post-page__comment-input',
    })
  }

  const changeRating = (e) => {
    if (e.target.closest('.comment-btn__plus')) {
      // dispatch({ type : 'POSTS_INCREASE_RATING', payload : { commentID : comment.id, postID : postID, answerID : answer.id} })
    } else if (e.target.closest('.comment-btn__minus')) {
      // dispatch({ type : 'POSTS_DECREASE_RATING', payload : { commentID : comment.id, postID : postID, answerID : answer.id} })
    }
  }

  return (
    <>
    <div className='comment-answer__wrapper' key={answer.id}>
      <Link
        to={ activeUser?.id !== answer.author.id ? `../users/${answer.author.id}` : '../profile' }
        className='comment__author-photo'
      >
        <img src={answer.author.mainPhoto} title='Перейти'/>
      </Link>
      <div className='post-page__comment-body-container'>
        <div className='post-page__comment-author-wrapper'>
          <Link
            to={ activeUser?.id !== answer.author.id ? `../users/${answer.author.id}` : '../profile' }
            className='post-page__comment-author'
          >
            {answer.author.firstName} {answer.author.lastName}
          </Link>
          <CommentConsumer />
        </div>
        <p className='post-page__comment-body'>{answer.text}</p>
        <div className='post-page__comment-options'>
          { activeUser.id && <button className='post-page__comment-options-btn' onClick={showAnswer}>Ответить</button> }
          <time>{answer.data}</time>
        </div>
      </div>
      <div className='post-page__comment-rating'>
        <button className='comment-btn__plus' onClick={(e) => changeRating(e)}>
          <FontAwesomeIcon icon={ faPlus } className='post-page__comment-icon comment-icon__plus'/>
        </button>
        <span style={{ color: getColor(answer.rating) }}>{answer.rating}</span>
        <button className='comment-btn__minus' onClick={(e) => changeRating(e)}>
          <FontAwesomeIcon icon={ faMinus } className='post-page__comment-icon comment-icon__minus'/>
        </button>
      </div>
    </div>
    {
      answerCommentState.isOpen &&
      <AddAnswer
        activeUser={activeUser}
        answerCommentState={answerCommentState}
        setAnswerCommentState={setAnswerCommentState}
        clearAnswer={clearAnswer}
        showAnswer={showAnswer}
        answer={answer}
        comment={comment}
        postID={postID}
        author={answer.author}
      />
    }
    </>
  )
}
