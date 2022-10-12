export const Album = ({ photos, date, setBigPhotoState }) => {

  return (
    <div className='year-photos'>
      <span>{date}</span>
      <div className='year-photos__container'>
      {
        photos.map((item, index) => {
          return (
            <img
              src={item.src}
              key={index}
              onClick={() => setBigPhotoState({ className : 'big-photo-visible', data : item, index : index })}
              title='Увеличить'
            />
          )
        })
      }
      </div>
    </div>
  )
};
