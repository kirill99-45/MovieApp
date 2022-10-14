import { Link } from 'react-router-dom';
import './box.css';

export const Box = ({ name, path, setPath }) => {
  return (
    <Link className='main-box' to={{ pathname: path }} onClick={setPath}>{name}
      <span />
      <span />
      <span />
      <span />
    </Link>
  )
}
