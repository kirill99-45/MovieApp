import { NavLink } from 'react-router-dom';
import './box.css';

const Box = (props) => {
  return (
    <NavLink className='sidebar__option' to={{ pathname: props.link }} title={props.name}>
      <h4 className='sidebar__option-title'>{props.name}</h4>
    </NavLink>
  )
}

export default Box;
