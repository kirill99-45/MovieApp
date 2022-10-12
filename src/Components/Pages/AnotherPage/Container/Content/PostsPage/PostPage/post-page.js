import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBookmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { TextBlock } from './Article/text-block.js';
import { PhotosBlock } from './Article/photos-block.js';
import { FilmCard } from './Article/film-card.js';
import { Comments } from 'C:/Users/User/github/movies/src/Components/Comments/comments.js';
import './post-page.css';

export const PostPage = ({ post, activeUser, setLayoutState, addNewCommentPost }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [scrollState, setScrollState] = useState({
    ref : useRef(null),
    scroll : 0
  })

  const goToTop = () => {
    scrollState.ref.current.scrollIntoView({ behavior : 'smooth', block : 'start', inline : 'center' })
  }

  const getComments = (comments) => {
    let res = comments.length

    comments.forEach(comment => {
      if (comment.answers) {
        res += comment.answers.length
      }
    })

    return res
  }

  useEffect(() => {
    const handler = () => {
      setScrollState({
        ...scrollState,
        scroll : window.pageYOffset
      })
    }

    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  })

  return (
    <div className='post-page'>
      <header className='post-page__header' ref={scrollState.ref}>
        <div className='post-page__category-wrapper'>
          <FontAwesomeIcon icon={ faBookmark } className='post-page__category-icon'/>
          <span className='post-page__category-title'>{post.category}</span>
        </div>
        <h1>{post.title}</h1>
        <div className='main-post__main-info'>
          <span className='main-post__data'>{post.data}</span>
          <div className='main-post__comments'>
            <FontAwesomeIcon icon={ faComment } className='post__comment-icon'/>
            <span>{getComments(post.comments)}</span>
          </div>
        </div>
      </header>
      <main className='post-page__main'>
        <div className='post-page__main-photo'>
          <img src={post.mainPhoto} alt='Photo' />
        </div>
        <p className='post-page__summary'>{post.article?.summary}  </p>
        {
          post.article?.blocks.map(item => {
            if (!item.photos) {
              return <TextBlock data={item} />
            } else {
              return <PhotosBlock data={item} />
            }
          })
        }
        <FilmCard data={post.article?.card}/>
      </main>
      <footer className='post-page__footer'>
        <h3>Комментарии {getComments(post.comments)}</h3>
        <Comments activeUser={activeUser} setLayoutState={setLayoutState} comments={post.comments} />
      </footer>
      { scrollState.scroll > 700 ? <button className='page-to-up' onClick={goToTop}>Наверх</button> : '' }
    </div>
  )
}
