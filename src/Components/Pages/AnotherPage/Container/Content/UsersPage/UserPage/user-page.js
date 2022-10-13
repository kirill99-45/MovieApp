import React, {useState, useEffect} from 'react';
import { LeftSide } from './Components/left-side';
import { RightSide } from './Components/right-side.js';
import './user-page.css';

export const UserPage = ({ user }) => {

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
