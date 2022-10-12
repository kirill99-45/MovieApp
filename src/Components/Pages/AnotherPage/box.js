import {NavLink} from 'react-router-dom';
import './box.css';

const Box = (props) => {
  return (
    <NavLink className='box' to={{ pathname: props.link }}>
      {props.name}
      <span />
      <span />
      <span />
      <span />
    </NavLink>
  )
}

export default Box;
