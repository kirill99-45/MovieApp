import { useDispatch } from 'react-redux';
import { bigPhotoOpen } from './../../Redux/actions.js';

export const Photo = ({ data, index }) => {

  const dispatch = useDispatch()

  const getPhoto = () => {
    dispatch(bigPhotoOpen(data, index))
  }

  return (
    <div className='profile__photo'>
      <img
        src={data.src}
        id={index}
        key={data.id}
        title='Увеличить'
        onClick={getPhoto}
      />
    </div>
  )
}
