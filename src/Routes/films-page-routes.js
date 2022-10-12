import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FilmPage } from './../Components/Pages/AnotherPage/Container/Content/FilmsPage/FilmPage/film-page.js';
import { MainFilmsPage } from './../Components/Pages/AnotherPage/Container/Content/FilmsPage/MainFilmPage/main-film-page.js';

export const FilmsPage = ({ activeUser, setLayoutState }) => {

  const films = useSelector((state) => {
    return state.filmsReducer
  })

  const FilmsElements = films.map((item, index) => {
    return (
      <Route path={`/${item.path}`} key={index}
        element={<FilmPage film={films[index]} activeUser={activeUser} setLayoutState={setLayoutState} />}
      />
    )
  })

  return (
    <Routes>
      <Route path='/' element={<MainFilmsPage films={films}/>} />
      { FilmsElements }
    </Routes>
  )
}
