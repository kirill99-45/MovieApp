import './preload.css';

export const Preload = () => {

  const arr = new Array(10).join('.').split('')

  return (
    <div className='preload__wrapper'>
      { arr.map(item => <div className='preload__card'></div>) }
    </div>
  )
}
