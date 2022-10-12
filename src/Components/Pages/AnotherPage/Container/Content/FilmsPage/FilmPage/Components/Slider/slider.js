import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { MiniSlider } from './mini-slider.js';
import './slider.css'

export const Slider = ({ photos, color }) => {

  const [currentPhoto, setPhoto] = useState(1); // Усанавливаем состояние для слайдера

  const nextSlide = state => { // Следующее фото
    setPhoto(state < (photos.length - 1)  ? state + 1 : 1)
  }

  const prevSlide = state => { // Предыдущее фото
    setPhoto(state < (photos.length) && state > 1 ? state - 1 : photos.length - 1)
  }

  return (
    <div className='film-card__slider'>
      <div className='slide'>
        <div className='slider-currentPhoto__container'>
          <button className='prev' onClick={() => prevSlide(currentPhoto)}>
            <FontAwesomeIcon icon={faAngleLeft} className='slider__prev'/>
          </button>
          <img src={photos[currentPhoto].src} className='currentPhoto' style={{ backgroundColor : color }}/>
          <button className='next' onClick={() => nextSlide(currentPhoto)}>
            <FontAwesomeIcon icon={faAngleRight} className='slider__next'/>
          </button>
        </div>
        <div className='mini-slider'>
          <MiniSlider photos={photos} currentPhoto={currentPhoto} setPhoto={setPhoto}/>
        </div>
        <span>{currentPhoto} из {photos.length - 1}</span>
      </div>
    </div>
  )
}
