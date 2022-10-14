import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './css/main-page.css';
import './css/media.css';

export const MainPostsPage = () => {

  const posts = useSelector(state => {
    return state.postsReducer
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const getCount = (post) => {
    let res = post.comments.length;

    post.comments.forEach(comment => {
      if (comment.answers) {
        res += comment.answers.length
      }
    })

    return res;
  }

  const getViews = (views) => {
    if (views > 1000) {
      return `${(views / 1000).toFixed(1)}K`
    } return views
  }

  return (
    <div className='post-page__wrapper'>
      <div className='main-posts__wrapper'>
        {
          posts.map(post => {
            if (post.isActive) {
              return (
                <Link to={{ pathname : `${post.id}` }} className='main-post__wrapper' key={post.id}>
                  <div className='main-post__img-wrapper'>
                    <img src={post.mainPhoto} />
                  </div>
                  <div className='post-page__view'>
                    <FontAwesomeIcon icon={faEye} />
                    <span>{getViews(post.views)}</span>
                  </div>
                  <div className='main-post__info-container'>
                    <span className='main-post__category'>{post.category}</span>
                    <h2>{post.title}</h2>
                    <div className='main-post__main-info'>
                      <span className='main-post__data'>{post.data}</span>
                      <div className='main-post__comments'>
                        <FontAwesomeIcon icon={faComment} className='main-post__comment-icon'/>
                        <span>{getCount(post)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }
          })
        }
      </div>
      <div className='new-posts__wrapper'>
      {
        posts.map((post, index) => {
          if (!post.isActive) {
            return (
              <Link to={{ pathname : `${post.id}` }} className='post__wrapper' key={index}>
                <div className='post__top'>
                  <img src={post.mainPhoto} />
                </div>
                <div className='post-page__view'>
                  <FontAwesomeIcon icon={faEye} />
                  <span>{getViews(post.views)}</span>
                </div>
                <div className='post__bottom'>
                  <span className='post__category'>#{post.category}</span>
                  <h3>{post.title}</h3>
                  <div className='post__main-info'>
                    <span className='post__data'>{post.data}</span>
                    <div className='post__comments'>
                      <FontAwesomeIcon icon={faComment} className='post__comment-icon'/>
                      <span>{getCount(post)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          }
        })
      }
      </div>
    </div>
  )
}
