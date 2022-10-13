import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bigPhotoClose } from 'C:/Users/User/github/movies/src/Redux/actions.js';

export const Comments = ({ comments, setBigPhotoState }) => {

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  const dispatch = useDispatch()

  const currentPath = window.location.pathname

  const getPathName = (comment) => {
    if (!activeUser.id) {
      return currentPath.split('/').map((item, index) => index !== 3 ? item : comment.author.id).join('/')
    } else {
     currentPath.split('/').map((item, index) => {
        if (item === 'profile') {
          return 'users'
        } else {
          return item
        }
      })

      currentPath.push(comment.author.id)
      return currentPath.join('/')
    }
  }

  if (comments.length > 0) {
    return (
      comments.map(item => {
        return (
          <div className='photo__comment' key={item.id}>
            <Link to={{ pathname : getPathName(item) }} onClick={() => dispatch(bigPhotoClose())}>
              <img src={item.author.mainPhoto} />
            </Link>
            <div className='comment-info'>
              <Link to={{ pathname : getPathName(item) }} onClick={() => dispatch(bigPhotoClose())}>
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
