import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bigPhotoClose, bigPhotoOpen } from 'C:/Users/User/github/movies/src/Redux/actions.js';
import { Comments } from './comments.js';
import { AddComment } from './add-comment';
import { AuthForAction } from './../AuthForAction/auth-for-action.js';
import './css/big-photo.css';
import './css/media.css';

export const BigPhoto = ({ photos }) => {

  const bigPhotoState = useSelector(state => {
    return state.bigPhotoReducer.data
  })

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  const dispatch = useDispatch()

  const bigPhotoIndex = useSelector(state => {
    return state.bigPhotoReducer.index
  })

  const prevPhoto = () => {
    if (bigPhotoIndex === 0) {
      let photoIndex = photos.length - 1
      dispatch(bigPhotoOpen(photos[photoIndex], photoIndex))
    } else {
      let photoIndex = bigPhotoIndex - 1
      dispatch(bigPhotoOpen(photos[photoIndex], photoIndex))
    }
  }

  const nextPhoto = () => {
    if (bigPhotoIndex === photos.length - 1) {
      let photoIndex = 0
      dispatch(bigPhotoOpen(photos[photoIndex], photoIndex))
    } else {
      let photoIndex = bigPhotoIndex + 1
      dispatch(bigPhotoOpen(photos[photoIndex], photoIndex))
    }
  }

  useEffect(() => { // События клавиатуры
    const setPhoto = (event) => {
      switch (event.key) {
        case 'Escape' : {
          dispatch(bigPhotoClose())
          break
        }
        case 'ArrowLeft' : {
          prevPhoto()
          break
        }
        case 'ArrowRight' : {
          nextPhoto()
          break;
        }
      }
    }

    window.addEventListener('keydown', setPhoto)

    return () => {
      window.removeEventListener('keydown', setPhoto)
    }
  })

  return (
    <div className='big-photo-visible'>
      <div className='overlay'>
        <div className='BigPhoto__container'>
          <div className='photo__container'>
            <div className='BigPhoto__prev-photo' onClick={prevPhoto}>
              <div className='big-Photo__prev-arrow'/>
            </div>
            <img src={bigPhotoState.src}/>
            <div className='BigPhoto__next-photo' onClick={nextPhoto}>
              <div className='big-Photo__next-arrow'/>
            </div>
            <div className='functions' />
          </div>
          <div className='BigPhoto__comments'>
           <div className='photo__info-container'>
             <div className='close-BigPhoto' onClick={() => dispatch(bigPhotoClose())}>
               <img src='http://cdn.onlinewebfonts.com/svg/img_229857.png' />
             </div>
              <div className='author-avatar'>
                <img src={bigPhotoState.author.mainPhoto} />
              </div>
              <div className='photo-info'>
                <span>{bigPhotoState.author.firstName} {bigPhotoState.author.lastName}</span>
                <span>{bigPhotoState.date}</span>
              </div>
           </div>
           <div className='photo__likes'>
            <div className='likes-container'>
              <img src='https://avatars.mds.yandex.net/i?id=9979f471ad72ab291ce5f982c81e9401-5235287-images-thumbs&n=13' />
              <span>{bigPhotoState.countLikes}</span>
            </div>
            <button type='button' className='big-photo__btn'>Нравится</button>
           </div>
           <div className='photo__comments-content'>
            <Comments comments={bigPhotoState.comments}/>
           </div>
           { activeUser.id ? <AddComment comments={bigPhotoState.comments} activeUser={activeUser}/> : <AuthForAction /> }
          </div>
        </div>
      </div>
    </div>
  )
}
