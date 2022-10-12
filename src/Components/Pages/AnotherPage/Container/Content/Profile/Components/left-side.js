import { useState } from 'react';

export const LeftSide = ({ activeUser, color }) => {

  const [changeAvatarState, setChangeAvatarState] = useState({ className : 'change-avatar-hidden', title : 'Редактировать' })

  const changeAvatar = () => {
    setChangeAvatarState( changeAvatarState.className ===  'change-avatar-hidden' ?
      { className : 'change-avatar-visible', title : 'Изменить изображение' } :
      { className : 'change-avatar-hidden', title : 'Редактировать' }
    )
  }

  return (
    <div className='profile__left-side'>
      <div className='profile__avatar'>
        <div className='avatar__wrapper'>
          <img src={activeUser.mainPhoto} alt='Ваше изображение' style={{ backgroundColor : color }}/>
        </div>
        <button className="btn-change-avatar" onClick={changeAvatar} type='button'>{changeAvatarState.title}</button>
        <div className={changeAvatarState.className}>
          <form>
            <span>Ссылка</span>
            <textarea className='link-for-avatar' placeholder='https://...'/>
            <button type='button'>Сохранить</button>
          </form>
        </div>
      </div>
    </div>
  )
}
