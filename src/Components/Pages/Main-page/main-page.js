import { Box } from './box.js';
import './main-page.css';

export const MainPage = ({ uppState, activeUser }) => {

  return (
    <div className='main-container' onClick={uppState}>
      <div className='main-sidebar'>
        <Box link='react-first-app/films' name='Фильмы'/>
        <Box link='react-first-app/posts' name='Лента'/>
        { activeUser.id && <Box link='react-first-app/profile' name='Мой профиль'/> }
        <Box link='react-first-app/users' name='Пользователи'/>
        <Box link='react-first-app/server' name='Сервер'/>
      </div>
    </div>
  )
}
