import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { PostPageComment } from './comment.js';
import { AddNewComment } from './add-new-comment.js';
import './comments.css';

export const Comments = ({ activeUser, setLayoutState, comments }) => {

  const Auth = () => {
    return (
      <button className='action-of-anonim' onClick={() => setLayoutState('layout-visible')}>
        Авторизоваться
      </button>
    )
  }

  return (
    <>
      {
        activeUser.id ?
          <AddNewComment activeUser={activeUser} /> :
          <Auth />
      }
      {
        comments.map(comment => {
          return  (
            <PostPageComment
              activeUser={activeUser}
              comment={comment}
              key={comment.id}
            />
          )
        })
      }
    </>
  )
}
