import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faBookOpenReader, faUsers, faServer, faSun, faHome } from '@fortawesome/free-solid-svg-icons';

const initState =
[
  {
    icon : faFilm,
    title : 'Фильмы',
    path : 'react-first-app/films',
    active : false,
  },
  {
    icon : faBookOpenReader,
    title : 'Записи',
    path : 'react-first-app/posts',
    active : false,
  },
  {
    icon : faUsers,
    title : 'Пользователи',
    path : 'react-first-app/users',
    active : false,
  },
  {
    icon : faServer,
    title : 'JSON',
    path : 'react-first-app/server',
    active : false,
  },
  {
    icon : faHome,
    title : 'Моя страница',
    path : 'react-first-app/profile',
    active : false,
  }
]

export const sidebarReducer = (state = initState, action) => {
  return state
}
