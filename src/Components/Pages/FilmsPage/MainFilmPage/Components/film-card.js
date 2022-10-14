import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title } from './title.js';
import { Genre } from './genre.js';
import { Description } from './description.js';
import './film-card.css';
import './media.css';

export const FilmCard = (props) => {

  /*------ Переменная для пропсов -------*/

  const data = props.allFilms;

  const getColor = () => { // Получаем цвет карточки года выпуска фильма
    const currentYear = new Date().getFullYear()
    if (currentYear - data.date === 0) {
      return '#17B978'
    } else if (currentYear - data.date < 5) {
      return '#A7FF83'
    } else {
      return '#FF7C38'
    }
  }

  /*----- Рисуем жанры фильма ---*/

  const [color, setColor] = useState('#232931')

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('load', () => {
      setColor('')
    })
  }, [])


  /*----- JSX разметка ---*/

  return (
      <Link to={{pathname : data.path}} className='films__item'>
        <div className='item__top-part'>
          <img src={data.poster} alt='Заставка' style={{ minWidth : '200px', backgroundColor : color }} className='item__poster'/>
          <div className='img__layout'>
            <button type='button'>Смотреть</button>
          </div>
          <div className='item__year' style={{ background: getColor() }}>
            {data.date}
          </div>
        </div>
        <div className='item__down-part'>
          <div className='item__main-info'>
            <div className='item__title'>Название:
              <span>
                <Title title={data.title} searchState={props.searchState}/>
              </span>
            </div>
            <div className='item__genre'>Жанр:
              <Genre data={data.genre}/>
            </div>
            <div className='item__duration'>Продолжительность: {data.duration}</div>
          </div>
          <div className='item__description'>
           <span>Описание</span>
           <div>
            <Description
              description={data.description}
              searchState={props.searchState}
            />
           </div>
          </div>
        </div>
      </Link>
  )
}
