import { useState, useEffect } from 'react';
import { Comments } from './comments.js';
import { AddComment } from './add-comment';
import './css/big-photo.css';
import './css/media.css';

export const BigPhoto = (props) => {

  const body = document.querySelector('body') // Получаем доступ для того, чтобы запретить скролл при открытии фотографии

  const prevPhoto = () => {
    if (props.bigPhotoState.index === 0) {
      let photoIndex = props.photos.length - 1
      props.setBigPhotoState({ className : 'big-photo-visible', data : props.photos[photoIndex], index : photoIndex })
    } else {
      let photoIndex = props.bigPhotoState.index - 1
      props.setBigPhotoState({ className : 'big-photo-visible', data : props.photos[photoIndex], index : photoIndex })
    }
  }

  const nextPhoto = () => {
    if (props.bigPhotoState.index === props.photos.length - 1) {
      let photoIndex = 0
      props.setBigPhotoState({ className : 'big-photo-visible', data : props.photos[photoIndex], index : photoIndex })
    } else {
      let photoIndex = props.bigPhotoState.index + 1
      props.setBigPhotoState({ className : 'big-photo-visible', data : props.photos[photoIndex], index : photoIndex })
    }
  }

  const data = props.props;

  useEffect(() => { // События клавиатуры
    const setPhoto = (event) => {
      if (props.bigPhotoState.className) {
        switch (event.key) {
          case 'Escape' : {
            props.setBigPhotoState({ className : 'big-photo-hidden', data : null, index : null})
            body.style.position = ''
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
    }

    window.addEventListener('keydown', setPhoto)

    return () => {
      window.removeEventListener('keydown', setPhoto)
    }
  })


  if (props.bigPhotoState.className === 'big-photo-visible') {

    body.style.position = 'fixed'

    return (
      <div className={props.bigPhotoState.className}>
        <div className='overlay'>
          <div className='BigPhoto__container'>
            <div className='photo__container'>
              <div className='BigPhoto__prev-photo' onClick={prevPhoto}>
                <div className='big-Photo__prev-arrow'/>
              </div>
              <img src={props.bigPhotoState.data.src}/>
              <div className='BigPhoto__next-photo' onClick={nextPhoto}>
                <div className='big-Photo__next-arrow'/>
              </div>
              <div className='functions' />
            </div>
            <div className='BigPhoto__comments'>
             <div className='photo__info-container'>
               <div className='close-BigPhoto' onClick={() => {props.setBigPhotoState({ className : 'big-photo-hidden' }); body.style.position = ''}}>
                 <img src='http://cdn.onlinewebfonts.com/svg/img_229857.png' />
               </div>
                <div className='author-avatar'>
                  <img src={props.bigPhotoState.data.author.mainPhoto} />
                </div>
                <div className='photo-info'>
                  <span>{props.bigPhotoState.data.author.firstName} {props.bigPhotoState.data.author.lastName}</span>
                  <span>{props.bigPhotoState.data.date}</span>
                </div>
             </div>
             <div className='photo__likes'>
              <div className='likes-container'>
                <img src='https://avatars.mds.yandex.net/i?id=9979f471ad72ab291ce5f982c81e9401-5235287-images-thumbs&n=13' />
                <span>{props.bigPhotoState.data.countLikes}</span>
              </div>
              <button type='button' className='big-photo__btn'>Нравится</button>
             </div>
             <div className='photo__comments-content'>
              <Comments
                comments={props.bigPhotoState.data.comments}
                setBigPhotoState={props.setBigPhotoState}
              />
             </div>
             <AddComment
              comments={props.bigPhotoState.data.comments}
              activeUser={props.activeUser}
              photoAddComment={props.photoAddComment}
              setLayoutState={props.setLayoutState}
             />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
