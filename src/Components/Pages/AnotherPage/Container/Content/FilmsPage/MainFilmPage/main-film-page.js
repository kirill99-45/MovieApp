import { useState, useEffect } from 'react';
import { FilmCard } from './Components/film-card.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp, faMagnifyingGlass, faXmark  } from '@fortawesome/free-solid-svg-icons';
import './css/main-film-page.css';
import './css/media.css';

export const MainFilmsPage = ({ films }) => {

  /* ---- Создаем локальное состояние для отрисовки нужных нам фильмов -----*/

  const [filmsState, setFilmsState] = useState(films)

  const filterOptions = ['Все','Наиболее популярное','По дате выхода','Длительность по убыванию','Длительность по возрастанию'] // Фильтры
  const [activeFilter, setActiveFilter] = useState('Все') // Состояние фильтра

  /* --------- Работа поисковика -----------*/

  const [searchState, setSearchState] = useState('')

  const clearSearchState = () => {
    setSearchState('')
  }

  /* --------- Работа фильтра (open/close) -----------*/

  const [filterState, setFilterState] = useState({
    filterClass : 'filter-hidden',
    optionsClass : 'options-hidden',
    icon : faAnglesDown,
  })

  const openFilters = () => {
    setFilterState( filterState.filterClass === 'filter-open'  ?
    { filterClass : 'filter-hidden', optionsClass : 'options-hidden', icon : faAnglesDown} :
    { filterClass : 'filter-open', optionsClass : 'options-open', icon :  faAnglesUp})
  };

  /* --------- Работа фильтра (отрисовка нужной последовательности элементов) -----------*/

  const search = (event) => {
    const arr = films

    switch (event.target.innerText) {
      case 'все': {
        setFilmsState(arr)
        break
      }
      case 'Наиболее популярное': {
        setFilmsState(arr.sort((a, b) => a.rating < b.rating ? 1 : -1))
          break;
      }
      case 'По дате выхода': {
        setFilmsState(arr.sort((a, b) => +a.date < +b.date ? 1 : -1 ))
            break;
      }
      case 'Длительность по убыванию': {
        setFilmsState(arr.sort((a, b) => +a.duration < +b.duration ? 1 : -1))
            break;
      }
      case 'Длительность по возрастанию': {
        setFilmsState(arr.sort((a, b) => +a.duration > +b.duration ? 1 : -1))
            break;
      }
    }
    setActiveFilter(event.target.innerText)
    setFilterState({ filterClass : 'filter-hidden', optionsClass : 'options-hidden', icon : faAnglesDown })
  }

  /* --------- Отрисовка всех элементов фильтра  -----------*/

  const Options = filterOptions.map((option, index) => {
    if (option.toLowerCase() === activeFilter.toLowerCase()) {
      return <span className='activeFilter' key={index}>{option}</span>
    } return <span className='options' key={index} onClick={search}>{option}</span>
  })


  /* --------- Отрисовка всех фильмов в зависимости от result  -----------*/

  const FilmsElement = filmsState
  .filter(({ description, title }) => {
    return description.toLowerCase().includes(searchState.toLowerCase()) ||
           title.toLowerCase().includes(searchState.toLowerCase())})
   .map(film => {
      let path = `/films/${film.path}`
      return (
      <FilmCard allFilms={film} key={film.id} searchState={searchState}/>
    )
  });

  useEffect(() => {
    const setState = (event) => {
      if (!event.target.closest('.filter__wrapper')) {
        setFilterState({ filterClass : 'filter-hidden', optionsClass : 'options-hidden', icon : faAnglesDown})
      }
    }

    window.addEventListener('click', setState)

    return () => {
      window.removeEventListener('click', setState)
    }
  })

  return (
    <div className='films__wrapper'>
      <div className='films-options'>
        <div className='filter__wrapper'>
          <div className={filterState.filterClass} onClick={openFilters}>
            <span>{activeFilter}</span>
            <FontAwesomeIcon icon={filterState.icon} className='filter__arrow-icon'/>
          </div>
          <div className={filterState.optionsClass}>
            { Options }
          </div>
        </div>
        <div className='d3'>
          <form>
            <input type='text' placeholder='Искать...' value={searchState} onChange={(event) => setSearchState(event.target.value)}/>
            <FontAwesomeIcon icon={faXmark} className='btn-clear__films' onClick={clearSearchState} size='xl'/>
          </form>
        </div>
       </div>
      <div className='films__items'>
        { FilmsElement }
      </div>
    </div>
  );
}
