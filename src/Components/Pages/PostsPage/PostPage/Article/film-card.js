import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faVideo } from '@fortawesome/free-solid-svg-icons';

export const FilmCard = ({ data }) => {

  return (
    <div className='post-page__film'>
      <header className='post-page__film-data'>{data.caption}</header>
      <main className='post-page__film-main'>
        <div>
          <Link to='/#' className='post-page__film-link'>
            <h3>{data.title}</h3>
          </Link>
          <div className='post-page__film-info'>
            <span className='post-page__film-genre'>{data.genre}</span>
            <span className='post-page__film-duration'>{data.duration}</span>
            <span className='post-page__film-age'>{data.age}</span>
          </div>
          <div className='post-page__film-participants'>
            <span className='post-page__film-producer'><strong>Режиссер:</strong> {data.producer}</span>
            <span className='post-page__film-roles'><strong>В главных ролях:</strong> {data.roles}</span>
          </div>
        </div>
        <div className='post-page__film-poster' rating={data.rating}>
          <img src={data.poster} alt='Poster'/>
          <FontAwesomeIcon icon={ faVideo } className='post-page__film-poster-icon'/>
        </div>
      </main>
      <footer className='post-page__film-footer'>
        <button className='post-page__film-button'>
          <FontAwesomeIcon icon={ faBookmark } className='post-page__film-icon'/>
          <span>Буду смотреть</span>
        </button>
      </footer>
    </div>
  )
}
