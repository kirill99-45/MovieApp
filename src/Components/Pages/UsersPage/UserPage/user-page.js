import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LeftSide } from './Components/left-side';
import { RightSide } from './Components/right-side.js';
import './user-page.css';

export const UserPage = () => {

  const { id } = useParams()

  const [user] = useSelector(state => {
    return state.usersReducer.filter(user => user.id === id)
  })

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='profile__wrapper'>
      <LeftSide user={user} />
      <RightSide user={user} />
    </div>
  )
}
