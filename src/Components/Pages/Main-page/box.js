import { NavLink } from 'react-router-dom';
import './box.css';

export const Box = ({ name, link }) => {
  return (
    <NavLink className='main-box' to={{ pathname: link }}>
      {name}
      <span />
      <span />
      <span />
      <span />
    </NavLink>
  )
}
