import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBookmark, faPlus, faMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AddAnswer } from './../Answers/add-answer.js';
import { Answers } from './../Answers/answer.js';
import { MoreAnswers } from './../Answers/more-answers.js';

export const PostPageComment = ({ activeUser, comment, isAnswer, post }) => {

  const dispatch = useDispatch()

  const getColor = (value) => {
    return value > 0 ? 'green' : 'red';
  }

  const answerRef = useRef(null)

  const CommentConsumer = ({ consumer }) => {
    return (
      <div className='post-page__comment-consumer'>
        <FontAwesomeIcon icon={ faArrowRight }/>
        <Link to={`../../users/${consumer.id}`}>{consumer.firstName} {consumer.lastName}</Link>
      </div>
    )
  }

  const [answerCommentState, setAnswerCommentState] = useState({
    value : '',
    isOpen : false,
    inputClassName : 'post-page__comment-input'
  })

  const clearAnswer = () => {
    setAnswerCommentState({
      value : '',
      isOpen : false,
      inputClassName : 'post-page__comment-input',
    })
  }

  const showAnswer = () => {
    const getScroll = () => {
      answerRef.current?.scrollIntoView({ behavior : 'smooth', block : 'end', inline : 'end' })
    }

    setAnswerCommentState({
      ...answerCommentState,
      isOpen : true,
    })
    setTimeout(getScroll, 0)
    clearTimeout(getScroll)
  }

  const COUNT = 2

  const [moreAnswersState, setMoreAnswersState] = useState({
    allAnswers : comment.answers,
    countOfVisible : COUNT,
    title : `Показать ответы (${comment.answers?.length - COUNT})`,
  });

  const RatingButtons = () => {
    const changeRating = (e) => {
      if (activeUser.id) {
        if (e.target.closest('.comment-btn__plus')) {
          // dispatch({ type : 'POSTS_INCREASE_RATING', payload : { commentID : comment.id, postID : postID } })
        } else if (e.target.closest('.comment-btn__minus')) {
          // dispatch({ type : 'POSTS_DECREASE_RATING', payload : { commentID : comment.id, postID : postID } })
        }
      }
    }

    return (
      <div className='post-page__comment-rating'>
        <button className='comment-btn__plus' onClick={(e) => changeRating(e)}>
          <FontAwesomeIcon icon={ faPlus } className='post-page__comment-icon comment-icon__plus'/>
        </button>
        <span style={{ color: getColor(comment.rating) }}>{comment.rating}</span>
        <button className='comment-btn__minus' onClick={(e) => changeRating(e)}>
          <FontAwesomeIcon icon={ faMinus } className='post-page__comment-icon comment-icon__minus'/>
        </button>
      </div>
    )
  }

  return (
    <div className='post-gage__comment-wrapper' ref={answerRef}>
      <div className='post-page__comment' >
        <Link
          to={ activeUser?.id !== comment.author.id ? `../users/${comment.author.id}` : '../profile' }
          className='comment__author-photo'
        >
          <img src={comment.author.mainPhoto} title='Перейти'/>
        </Link>
        <div className='post-page__comment-body-container'>
          <div className='post-page__comment-author-wrapper'>
            <Link
              to={ activeUser?.id !== comment.author.id ? `../users/${comment.author.id}` : '../profile' }
              className='post-page__comment-author'
            >
              {comment.author.firstName} {comment.author.lastName}
            </Link>
            { isAnswer ? <CommentConsumer consumer={comment.consumer}/> : '' }
          </div>
          <p className='post-page__comment-body'>{comment.text}</p>
          <div className='post-page__comment-options'>
            { activeUser.id && <button className='post-page__comment-options-btn' onClick={showAnswer}>Ответить</button> }
            <time>{comment.data}</time>
          </div>
        </div>
        {
          activeUser.id && <RatingButtons />
        }
      </div>
      {
        comment.answers?.length > COUNT &&
        <MoreAnswers
          comment={comment}
          moreAnswersState={moreAnswersState}
          setMoreAnswersState={setMoreAnswersState}
          count={COUNT}
        />
      }
      {
        comment.answers?.map((answer, index) => { // Если есть ответы на комментарий, то они выводятся
          if (index < moreAnswersState.countOfVisible) {
            return (
              <Answers
                comment={comment}
                answer={answer}
                isAnswer={true}
                answerRef={answerRef}
                postID={post}
                author={answer.author}
              />
            )
          }
        })
      }
      {
        answerCommentState.isOpen &&
        <AddAnswer // Блок, отвечающий за возможность ответа на комментарий
          comment={comment}
          answerCommentState={answerCommentState}
          setAnswerCommentState={setAnswerCommentState}
          clearAnswer={clearAnswer}
          showAnswer={showAnswer}
          postID={post}
          author={comment.author}
          activeUser={activeUser}
        />
      }
    </div>
  )
}
