import { useEffect } from 'react';
import { Album } from './album.js';
import './all-photos.css';

export const AllPhotos = ({ allPhotosState, setAllPhotosState, setBigPhotoState }) => {

  const body = document.querySelector('body')

  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape' && allPhotosState.className === 'allPhotos-visible') {
        setAllPhotosState({ className : 'allPhotos-hidden', photos : null, })
        body.style.position = ''
      }
    }

    window.addEventListener('keyup', close)

    return () => {
      window.removeEventListener('keyup', close)
    }
  })

  if (allPhotosState.className === 'allPhotos-visible') {

    body.style.position = 'fixed'

    const Albums = {};
    const years = [];

    allPhotosState.photos.forEach((item, i) => {
      let year = item.date.split(' ')[2];
      if (!Albums[year]) {
        Albums[year] = [];
        Albums[year].push(item)
        years.push(year)
      } else {
        Albums[year].push(item)
      }
    });

    return (
      <div className={allPhotosState.className} >
        <div className='allPhotos__overlay' >
          <div className='allPhotos__wrapper'>
            <div className='allPhotos__description'>
              <span>Фотографии</span>
              <div className='all-photos__close' onClick={() => {setAllPhotosState({ className : 'allPhotos-hidden', photo : null }); body.style.position = ''}}>
                <img src='http://cdn.onlinewebfonts.com/svg/img_229857.png'/>
              </div>
            </div>
            {
              years.map((item, index) => {
                return <Album photos={Albums[years[index]]} date={item} setBigPhotoState={setBigPhotoState} key={index}/>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
