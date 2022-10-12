export const Photo = (props) => {

  return (
    <div className='profile__photo'>
      <img
      src={props.data.src}
      id={props.index}
      key={props.data.id} title='Увеличить'
      onClick={() => props.setBigPhotoState({ className : 'big-photo-visible', data : props.data, index : props.index })}
      style={{ backgroundColor : props.color }}
      />
    </div>
  )
}
