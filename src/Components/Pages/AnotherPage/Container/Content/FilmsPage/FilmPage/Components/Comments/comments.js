import { Link } from 'react-router-dom';

const Comments = ({ comments, activeUser, color }) => {

  const path = (comment) => {
    if (comment.author.id === activeUser.id) {
      return '/profile'
    } return `/users/${comment.author.id}`
  }

  return (
    comments.map((comment, index) => {
      return (
        <div className='post__comment'>
            <div className='comment__author-avatar'>
              <Link to={{ pathname : path(comment) }}>
                <img src={comment.author.avatar} style={{ backgroundColor : color }}/>
              </Link>
            </div>
          <div className='comment__body'>
            <div className='comment__author'>
              <Link to={{ pathname : path(comment) }}>
                <span>{comment.author.firstName} {comment.author.lastName}</span>
              </Link>
            </div>
            <div className='comment__content'>
              <span>{comment.content}</span>
            </div>
            <div className='comment__date'>
              <span>{comment.date}</span>
            </div>
          </div>
        </div>
      )
    })
  )
}


export default Comments;
