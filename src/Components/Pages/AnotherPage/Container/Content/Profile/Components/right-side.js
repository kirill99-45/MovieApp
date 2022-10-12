import { useState } from 'react';
import { AllPhotos } from 'C:/Users/User/github/movies/src/Components/AllPhotos/all-photos.js';
import { Photo } from 'C:/Users/User/github/movies/src/Components/AllPhotos/photo.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';

export const RightSide = ({ activeUser, setBigPhotoState, color }) => {

  let checkTitleSubscribers = (subscribers) => {
    if (subscribers % 10 === 1) {
      return 'Подписчик'
    } else if (subscribers % 10 === 2
      || subscribers % 10 === 3
      || subscribers % 10 === 4) {
        return 'Подписчика'
    }
    return 'Подписчиков'
  }

 /*------- Формируем надпись количества подписок -------*/

  let checkTitleSubscribs = (subscribs) => {
    if (subscribs % 10 === 1) {
      return 'Подписка'
    } else if (subscribs % 10 === 2
      || subscribs % 10 === 3
      || subscribs % 10 === 4) {
      return 'Подписки'
    }
    return 'Подписок'
  }

 /*------ Формируем надпись количества фотографий ------*/

 let chechTitlePhotos = (photos) => {
   if (photos % 10 === 1) {
     return 'Фотография'
   } else if (photos % 10 === 2
     || photos % 10 === 3
     || photos % 10 === 4) {
     return 'Фотографии'
   }
   return 'Фотографий'
 }

 /*------ Функция открытия / закрытия окна со всеми фотографиями -----*/

  const openAllPhotos = () => {
    allPhotosState === 'allPhotos-hidden' ? setAllPhotosState('allPhotos-visible') : setAllPhotosState('allPhotos-hidden');
  }

  const [additionalInfoState, setAdditionalInfoState] = useState({ className : 'additional-info-hidden', title : 'Подробнее'  });

  const showAdditionalInfo = () => {
    return setAdditionalInfoState(additionalInfoState.className === 'additional-info-hidden' ?
        { className : 'additional-info-visible', title : 'Скрыть' } :
        { className : 'additional-info-hidden', title : 'Подробнее' })
  }

  const [allPhotosState, setAllPhotosState] = useState({ className : 'allPhotos-hidden', photos : null })

  const [statusState, setStatusState] = useState(false)

  return (
    <div className='profile__right-side'>
      <AllPhotos
        allPhotosState={allPhotosState}
        setAllPhotosState={setAllPhotosState}
        photos={activeUser.photos}
        activeUser={activeUser}
        setBigPhotoState={setBigPhotoState}
      />
      <div className='profile__main-info'>
        <div className='fio__wrapper'>
          <span className='profile__fio-read'>{activeUser.firstName} {activeUser.lastName}</span>
          <div className='asd'>
            <input type='text' value={activeUser.status} disabled={!statusState} className='profile__status' />
            <FontAwesomeIcon icon={ faPen } className='profile__status-icon' onClick={() => setStatusState(statusState === true ? false : true)}/>
          </div>
        </div>
        <div className='profile__additional-info'>
          <div className='profile__additional-item'>
            <span>Место учебы:</span>
            <span>{activeUser.education.university}</span>
          </div>
         <button type='button' className='btn-open__additional-info' onClick={showAdditionalInfo}>{additionalInfoState.title}</button>
         <div className={additionalInfoState.className}>
           <div className='profile__additional-item'>
             <span>Языки:</span>
             <div className='additionalInfo-item__languages'>
               {
                 activeUser.languages.map(language => { return <span>{language}</span> })
               }
             </div>
            </div>
           <div className='profile__additional-item'>
             <span>Вуз:</span>
             <span>{activeUser.education.university}</span>
           </div>
           <div className='profile__additional-item'>
             <span>Факультет:</span>
             <span>{activeUser.education.faculty}</span>
           </div>
         </div>
        </div>
        <div className='count__wrapper'>
          <div className='profile__count-of'>
            <span>{checkTitleSubscribers(activeUser.subscribers.length)}</span>
            <span>{activeUser.subscribers.length}</span>
          </div>
          <div className='profile__count-of'>
            <span>{checkTitleSubscribs(activeUser.subscribs.length)}</span>
            <span>{activeUser.subscribs.length}</span>
          </div>
          <div className='profile__count-of'>
            <span>{chechTitlePhotos(activeUser.photos.length)}</span>
            <span>{activeUser.photos.length}</span>
          </div>
        </div>
      </div>
      <div className='profile__photos'>
       <div className='photos__description' onClick={() => setAllPhotosState({ className : 'allPhotos-visible', photos : activeUser.photos })}>
         <span onClick={openAllPhotos}>Мои фотографии</span>
         <span>{activeUser.photos.length}</span>
       </div>
       <div className='photos-container'>
       {
         activeUser.photos.map((photo, index) => {
           if (index < 4) {
             return (
               <Photo
                 key={photo.id}
                 index={index}
                 setBigPhotoState={setBigPhotoState}
                 data={photo}
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
