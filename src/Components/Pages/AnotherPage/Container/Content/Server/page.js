export const Page = ({ posts }) => {

  return (
    <>
      {
        posts.map((post, index) => {
          return (
            <div className='card__wrapper' key={index}>
              <div className='card__id'>ID: {post.id}</div>
              <div className='card__title'>
                {
                  post.title?.split(' ').map(word => {
                    if (word === post.findWord) {
                      return <span className='find-word'>{word}</span>
                    } else return <span>{word}</span>
                  })
                }
              </div>
              <div className='card__body'>{post.body}</div>
            </div>
          )
        })
      }
    </>
  )
}
