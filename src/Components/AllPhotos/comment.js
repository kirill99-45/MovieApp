import { Link } from 'react-router-dom';

export const Comment = (props) => {

  const data = props.props

  const checkActiveUser = id => {
    if (id === props.author) {
      return '/profile'
    } return `/users/${data.author.id}`
  }

  return (
    <div className='photo__comment'>
      <Link to={{ pathname : checkActiveUser(data.author.id) }}>
        <img src={data.author.mainPhoto} />
      </Link>
      <div className='comment-info'>
        <Link to={{ pathname : checkActiveUser(data.author.id) }}>
          <span>{data.author.firstName} {data.author.lastName}</span>
        </Link>
        <span>{data.text}</span>
        <span>{data.date}</span>
      </div>
    </div>
  )
}

export const WithoutComments = () => {
  return (
    <div className='photo__without-comments'>
      <span>Пока никто не оставил комментариев</span>
      <span>Стань первым:)</span>
    </div>
  )
}
