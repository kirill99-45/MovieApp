import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostPageComment } from './comment.js';
import { AddNewComment } from './add-new-comment.js';
import { AuthForAction } from './../AuthForAction/auth-for-action.js';
import { activeUserOpen } from 'C:/Users/User/github/movies/src/Redux/actions.js';
import './comments.css';

export const Comments = ({ comments }) => {

  const dispatch = useDispatch()

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  return (
    <>
      { activeUser.id ? <AddNewComment /> : <AuthForAction /> }
      { comments.map(comment => <PostPageComment comment={comment} key={comment.id} activeUser={activeUser}/>) }
    </>
  )
}
