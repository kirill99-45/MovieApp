import { Link } from 'react-router-dom';

export const Comments = ({ comments, setBigPhotoState }) => {
  if (comments.length > 0) {
    return (
      comments.map(item => {
        return (
          <div className='photo__comment' key={item.id}>
            <Link to={{ pathname : `/users/${item.author.id}`}} onClick={() => setBigPhotoState({ className : 'big-photo-hidden' })}>
              <img src={item.author.mainPhoto} />
            </Link>
            <div className='comment-info'>
              <Link to={{ pathname : `/users/${item.author.id}`}} onClick={() => setBigPhotoState({ className : 'big-photo-hidden' })}>
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
