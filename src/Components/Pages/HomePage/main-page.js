import { Box } from './box.js';
import { useSelector } from 'react-redux';
import './main-page.css';

export const MainPage = () => {

  const isActiveUser = useSelector(state => {
    return state.activeUserReducer.user.id
  })

  return (
    <div className='main-container'>
      <div className='main-sidebar'>
        <Box path='films' name='Фильмы' />
        <Box path='posts' name='Записи' />
        { isActiveUser && <Box path='profile' name='Мой профиль'/> }
        <Box path='users' name='Пользователи' />
        <Box path='server' name='Сервер' />
      </div>
    </div>
  )
}
