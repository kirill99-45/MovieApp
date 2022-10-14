import './article.css';

export const PhotosBlock = ({ data }) => {

  return (
    <div className='post-page__photos'>
      <div className='post-page__photos-container'>
        {
          data.photos.map((item, index) => {
            return (
              <div className='post-page__photos-photo' key={index}>
                <img src={item} alt='Photo' />
              </div>
            )
          })
        }
      </div>
      <span className='post-page__photos-title'>{data.title}</span>
    </div>
  )
}
