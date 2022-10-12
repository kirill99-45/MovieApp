import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faBookOpenReader, faUsers, faServer, faSun, faHome } from '@fortawesome/free-solid-svg-icons';

const initState =
[
  {
    icon : faFilm,
    title : 'Фильмы',
    path : '/MovieApp/films',
    active : false,
  },
  {
    icon : faBookOpenReader,
    title : 'Записи',
    path : '/MovieApp/posts',
    active : false,
  },
  {
    icon : faUsers,
    title : 'Пользователи',
    path : '/MovieApp/users',
    active : false,
  },
  {
    icon : faServer,
    title : 'JSON',
    path : '/MovieApp/server',
    active : false,
  },
  {
    icon : faHome,
    title : 'Моя страница',
    path : '/MovieApp/profile',
    active : false,
  }
]

export const sidebarReducer = (state = initState, action) => {
  return state
}
