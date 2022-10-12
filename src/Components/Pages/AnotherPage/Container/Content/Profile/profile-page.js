import { useEffect, useState } from 'react';
import { BigPhoto } from 'C:/Users/User/github/movies/src/Components/Big-photo/big-photo.js';
import { RightSide } from './Components/right-side';
import { LeftSide } from './Components/left-side.js';
import './css/profile-page.css';
import './css/media.css';

export const ProfilePage = ({ activeUser, setLayoutState }) => {

  const [bigPhotoState, setBigPhotoState] = useState({ className : 'big-photo-hidden', data : null })

  const [color, setColor] = useState('#232931')

  useEffect(() => {
    window.scrollTo(0, 0)

    const getColor = () => setColor('')

    window.addEventListener('load', getColor)

    return () => {
      window.removeEventListener('load', getColor)
    }
  }, [])


  if (activeUser.id) {
    return (
       <div className='profile__wrapper'>
         <BigPhoto
           setBigPhotoState={setBigPhotoState}
           bigPhotoState={bigPhotoState}
           setLayoutState={setLayoutState}
           activeUser={activeUser}
           photos={activeUser.photos}
         />
         <LeftSide
          activeUser={activeUser}
          color={color}
         />
         <RightSide
           activeUser={activeUser}
           setBigPhotoState={setBigPhotoState}
           color={color}
         />
       </div>
    )
  } window.location.pathname = '/react-first-app/'
}
