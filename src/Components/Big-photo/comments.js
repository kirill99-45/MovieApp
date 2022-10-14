import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bigPhotoClose } from 'C:/Users/User/github/movies/src/Redux/actions.js';

export const Comments = ({ comments, setBigPhotoState }) => {

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  const dispatch = useDispatch()

  if (comments.length > 0) {
    return (
      comments.map(item => {
        return (
          <div className='photo__comment' key={item.id}>
            <Link to={`../users/${item.author.id}`} onClick={() => dispatch(bigPhotoClose())}>
              <img src={item.author.mainPhoto} />
            </Link>
            <div className='comment-info'>
              <Link to={`../users/${item.author.id}`} onClick={() => dispatch(bigPhotoClose())}>
                <span>{item.author.firstName} {item.author.lastName}</span>
              </Link>
              <span>{item.text}</span>
              <span>{item.date}</span>
            </div>
          </div>
          )
        }
      )
    )
  } return <div className='photo__without-comments'>Пока никто не оставил комментариев</div>
}
