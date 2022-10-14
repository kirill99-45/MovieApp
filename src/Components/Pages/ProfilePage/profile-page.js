import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BigPhoto } from 'C:/Users/User/github/movies/src/Components/Big-photo/big-photo.js';
import { RightSide } from './Components/right-side';
import { LeftSide } from './Components/left-side.js';
import './css/profile-page.css';
import './css/media.css';

export const ProfilePage = () => {

  const photos = useSelector(state => {
    return state.activeUserReducer.user.photos
  })

  const isBigPhoto = useSelector(state => {
    return state.bigPhotoReducer.isOpen
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
     <div className='profile__wrapper'>
       { isBigPhoto && <BigPhoto photos={photos}/> }
       <LeftSide />
       <RightSide />
     </div>
  )
}
