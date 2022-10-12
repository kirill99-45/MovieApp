export const MiniSlider = ({ photos, currentPhoto, setPhoto }) => {

  return photos.map(item => {
    if (item.src !== '' && item.id !== +currentPhoto) {
      return (
        <div className='mini-slider__container' onClick={(event) => setPhoto(+event.target.id)}>
          <img src={item.src} id={item.id}/>
        </div>
      )
    } else if (item !== '' && item.id === +currentPhoto) { // Это необходимо для проверки на первую фоторафию
                                                          // Массив из фотографий начинается с пустого элемента, чтобы выранвять нумерацию
      return (
        <div className='mini-slider__container-current'>
          <img src={item.src} />
        </div>
      )
    }
  })
}
