import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faBookOpenReader, faUsers, faServer, faSun, faHome } from '@fortawesome/free-solid-svg-icons';

const initState =
[
  {
    icon : faFilm,
    title : 'Фильмы',
    path : 'films',
    active : false,
  },
  {
    icon : faBookOpenReader,
    title : 'Записи',
    path : 'posts',
    active : false,
  },
  {
    icon : faUsers,
    title : 'Пользователи',
    path : 'users',
    active : false,
  },
  {
    icon : faServer,
    title : 'JSON',
    path : 'server',
    active : false,
  },
  {
    icon : faHome,
    title : 'Моя страница',
    path : 'profile',
    active : false,
  }
]

export const sidebarReducer = (state = initState, action) => {
  return state
}
