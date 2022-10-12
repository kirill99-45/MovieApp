import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';


const SidebarUser = ({ activeUser, sidebarState }) => {
  return (
    <div className='sidebar__user'>
      <button className='sidebar__user-btn'>
        <FontAwesomeIcon icon={faCircleRight} title='Выйти' className='new-sidebar__btn-icon'/>
      </button>
      <Link to='react-first-app/users/11111111' className={sidebarState.user}>
        <img src={activeUser.mainPhoto} alt='User photo' className='sidebar__user-photo'/>
        <div className='sidebar__user-name'>
          <span>{activeUser.firstName}</span>
          <span>{activeUser.lastName}</span>
        </div>
      </Link>
    </div>
  )
}

export default SidebarUser;
