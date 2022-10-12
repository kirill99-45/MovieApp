import { useState } from 'react';
import { AllPhotos } from 'C:/Users/User/github/movies/src/Components/AllPhotos/all-photos.js';
import { Photo } from 'C:/Users/User/github/movies/src/Components/AllPhotos/photo.js';

export const RightSide = ({ user, activeUser, setBigPhotoState, color }) => {

  /*------- Формируем надпись количества подписчиков --------*/

   const checkTitleSubscribers = (subscribers) => {
     if (subscribers % 10 === 1) {
       return 'Подписчик'
     } else if (subscribers % 10 === 2
       || subscribers % 10 === 3
       || subscribers % 10 === 4) {
       return 'Подписчика'
     }
     return 'Подписчиков'
   }

  /*------- Формируем надпись количества подписок --------*/

   const checkTitleSubscribs = (subscribs) => {
     if (subscribs % 10 === 1) {
       return 'Подписка'
     } else if (subscribs % 10 === 2
       || subscribs % 10 === 3
       || subscribs % 10 === 4) {
       return 'Подписки'
     } return 'Подписок'
   }

  /*------- Формируем надпись количества фотографий --------*/

  const checkTitlePhotos = (photos) => {
    if (photos % 10 === 1) {
      return 'Фотография'
    } else if (photos % 10 === 2
      || photos % 10 === 3
      || photos % 10 === 4) {
        return 'Фотографии'
    } return 'Фотографий'
  }

  /*----- Создаем состояние для дополнительной информации о пользователе -------*/

  const [additionalInfoState, setAdditionalInfoState] = useState({ className : 'additional-info-hidden', title : 'Подробнее'  });

  const showAdditionalInfo = () => {
    return setAdditionalInfoState(additionalInfoState.className === 'additional-info-hidden' ?
        { className : 'additional-info-visible', title : 'Скрыть' } :
        { className : 'additional-info-hidden', title : 'Подробнее' })
  }

  const [allPhotosState, setAllPhotosState] = useState({ className : 'allPhotos-hidden', photos : null })

  return (
    <div className='profile__right-side'>
      <AllPhotos
        allPhotosState={allPhotosState}
        setAllPhotosState={setAllPhotosState}
        photos={user.photos}
        activeUser={activeUser}
        setBigPhotoState={setBigPhotoState}
      />
      <div className='profile__main-info'>
        <div className='fio__wrapper'>
          <div className='profile__fio-read'>{user.firstName} {user.lastName}</div>
          <div className='profile__status'>{user.status}</div>
        </div>
        <div className='profile__additional-info'>
          <div className='profile__additional-item'>
            <span>Место учебы:</span>
            <span>{user.education.university}</span>
          </div>
         <button type='button' className='btn-open__additional-info' onClick={showAdditionalInfo}>{additionalInfoState.title}</button>
         <div className={additionalInfoState.className}>
           <div className='profile__additional-item'>
             <span>Языки:</span>
             <div className='additionalInfo-item__languages'>
               {
                 user.languages.map(language => {return <span>{language}</span>})
               }
             </div>
           </div>
           <div className='profile__additional-item'>
             <span>Учебное заведение:</span>
             <span>{user.education.university}</span>
           </div>
           <div className='profile__additional-item'>
             <span>Факультет:</span>
             <span>{user.education.faculty}</span>
           </div>
         </div>
        </div>
        <div className='count__wrapper'>
          <div className='profile__count-of'>
            <span>{checkTitleSubscribers(user.subscribers.length)}</span>
            <span>{user.subscribers.length}</span>
          </div>
          <div className='profile__count-of'>
            <span>{checkTitleSubscribs(user.subscribs.length)}</span>
            <span>{user.subscribs.length}</span>
          </div>
          <div className='profile__count-of'>
            <span>{checkTitlePhotos(user.photos.length)}</span>
            <span>{user.photos.length}</span>
          </div>
        </div>
      </div>
      <div className='profile__photos'>
       <div className='photos__description' onClick={() => setAllPhotosState({ className : 'allPhotos-visible', photos : user.photos })}>
         <span>Фотографии</span>
       </div>
       <div className='photos-container'>
       {
         user.photos.map((photo, index) => {
           if (index < 4) {
             return (
               <Photo
                 key={user.photos[index].id}
                 index={index}
                 setBigPhotoState={setBigPhotoState}
                 data={user.photos[index]}
                 activeUser={activeUser}
                 color={color}
               />
             )
           }
         })
       }
       </div>
      </div>
    </div>
  )
}
