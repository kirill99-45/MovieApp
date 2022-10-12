import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faBookOpenReader, faUsers, faServer, faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

const SidebarOptions = ({ options, setSidebarState, activeUser }) => {

  return options.map(({ path, title, icon }) => {
    if (title !== 'Моя страница') {
      return (
        <Link to={path} className='sidebar__item-wrapper' onClick={() => setSidebarState({ wrapper : 'new-sidebar', user : 'sidebar__user-container'})}>
          <FontAwesomeIcon icon={icon} className={ window.location.pathname.includes(path) ? 'sidebar__icon-active' : 'sidebar__icon'} title={title}/>
          <span className='sidebar__item-description'>{title}</span>
        </Link>
      )
    } else if (title && activeUser.id) {
      return (
        <Link to={path} className='sidebar__item-wrapper' onClick={() => setSidebarState({ wrapper : 'new-sidebar', user : 'sidebar__user-container'})}>
          <FontAwesomeIcon icon={icon} className={ window.location.pathname.includes(path) ? 'sidebar__icon-active' : 'sidebar__icon'} title={title}/>
          <span className='sidebar__item-description'>{title}</span>
        </Link>
      )
    }
  })
}

export default SidebarOptions;
