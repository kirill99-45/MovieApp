import { Box } from './box.js';
import './main-page.css';

export const MainPage = ({ uppState, activeUser }) => {

  return (
    <div className='main-container' onClick={uppState}>
      <div className='main-sidebar'>
        <Box link='/MovieApp/films' name='Фильмы'/>
        <Box link='/MovieApp/posts' name='Записи'/>
        { activeUser.id && <Box link='MovieApp/profile' name='Мой профиль'/> }
        <Box link='/MovieApp/users' name='Пользователи'/>
        <Box link='/MovieApp/server' name='Сервер'/>
      </div>
    </div>
  )
}
