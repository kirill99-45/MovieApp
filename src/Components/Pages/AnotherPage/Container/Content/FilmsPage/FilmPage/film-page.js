import { useState, createRef, useEffect } from 'react';
import { Slider } from './Components/Slider/slider.js';
import { Comments } from 'C:/Users/User/github/movies/src/Components/Comments/comments.js';
import { Grade } from './Components/Grade/grade.js';
import './css/film-page.css';
import './css/media.css';

export const FilmPage = ({ film }) => {

  const [color, setColor] = useState('#232931')

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('load', () => {
      setColor('')
    })
  }, [])

  const getColor = () => {
    const currentYear = new Date().getFullYear()
    if (currentYear - film.date === 0) {
      return '#17B978'
    } else if (currentYear - film.date < 5) {
      return '#A7FF83'
    } else {
      return '#FF7C38'
    }
  }

  return (
    <div className='film-page__wrapper'>
      <div className='film-card'>
        <div className='film-card__info'>
         <Slider photos={film.slider.slides} color={color}/>
          <div className='film-card__about'>
          <span className='about-film'>Фильм: {film.title}</span>
            <div className='about__wrapper'>
              <div className='rows'>
                <div>
                  <span>Год производства</span>
                  <span>{film.date}</span>
                </div>
                <div>
                  <span>Страна</span>
                  <span>{film.country}</span>
                </div>
                <div>
                  <span>Жанр</span>
                  <div>
                    { film.genre.map(item => <span>{item}</span>) }
                  </div>
                </div>
                <div>
                  <span>Композитор</span>
                  <span>{film.compositor}</span>
                </div>
                <div>
                  <span>Режиссер</span>
                  <span>{film.director}</span>
                </div>
                <div>
                  <span>Сценарий</span>
                  <span>{film.scenario}</span>
                </div>
                <div>
                  <span>Продюсер</span>
                  <span>{film.producer}</span>
                </div>
                <div>
                  <span>Оператор</span>
                  <span>{film.operator}</span>
                </div>
                <div>
                  <span>Бюджет</span>
                  <span>{film.budjet}</span>
                </div>
                <div>
                  <span>Оценка</span>
                  <span>{film.rating}</span>
                </div>
              </div>
            </div>
            <div className='btn__container'>
              <Grade />
              <button type='button'>Хочу посмотреть</button>
            </div>
          </div>
        </div>
        <div className='trailer__container'>
          <iframe src={film.src}
            className='trailer'
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ backgroundColor : color }}
          />
        </div>
        <div className='film-card__wrapper-description'>
          <h2>Описание</h2>
          <div className='film__description'>{film.description}</div>
        </div>
      </div>
      <div className='comments'>
        <span className='comments-title'>Коментарии</span>
        <Comments comments={film.comments} color={color} />
      </div>
    </div>
  )
}
