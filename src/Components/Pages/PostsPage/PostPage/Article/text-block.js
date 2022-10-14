export const TextBlock = ({ data }) => {
  return (
    <div className='post-page__article'>
      <h3 className='post-page__article-title'>{data.title}</h3>
      {
        data.paragraphs.map((item, index) => <p className='post-page__article-text' key={index}>{item}</p>)
      }
    </div>
  )
}
