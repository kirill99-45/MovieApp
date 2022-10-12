import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { BigPhoto } from 'C:/Users/User/github/movies/src/Components/Big-photo/big-photo.js';
import { LeftSide } from './Components/left-side';
import { RightSide } from './Components/right-side.js';
import './user-page.css';

export const UserPage = ({ user, activeUser, setLayoutState }) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [bigPhotoState, setBigPhotoState] = useState({ className : 'big-photo-hidden', data : null })

  /*------ JSX разметка --------*/

  return (
    <div className='profile__wrapper'>
      <BigPhoto
        setBigPhotoState={setBigPhotoState}
        bigPhotoState={bigPhotoState}
        photos={user.photos}
        setLayoutState={setLayoutState}
        activeUser={activeUser}
      />
      <LeftSide
        activeUser={activeUser}
        user={user}
        setLayoutState={setLayoutState}
      />
      <RightSide
        user={user}
        activeUser={activeUser}
        setBigPhotoState={setBigPhotoState}
      />
    </div>
  )
}
