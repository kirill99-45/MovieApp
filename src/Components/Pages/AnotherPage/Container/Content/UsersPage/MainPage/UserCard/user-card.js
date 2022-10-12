import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './css/user-card.css';
import './css/media.css';

export const UserCard = ({ user, activeUser, card, color }) => {

  /*------ Определяем возраст пользователя -----*/

  const birthday = user.birthday.split('.') // У каждого пользователя есть ключ с его датой рождения в формате дд.мм.гггг
                                        // Разбиваем на массив, чтобы сравнивать поштучно

  const now = new Date() // Определяем текущую дату

  const nowYear = now.getFullYear()  // Получаем текущий год
  const nowMonth = now.getMonth() + 1 // Получаем текущий месяц (+1 потому что в JS месяца считаются от 0 до 11)
  const nowDate = now.getDate() // Получаем текущее число

  /*--- Сравниваем текущие показатели с теми, которые у пользователя ----*/

  const years = nowYear - (+birthday[2])
  const months = nowMonth - (+birthday[1])
  const date = nowDate - (+birthday[0])

  /*----- Определяем количество полных лет -----*/

  const howOld = (years, months, date) => {
    if ((months || date) <= 0) { // Если месяцы или числа, меньше или равны нулю,
                               // то возвращаем год - 1, т.к. д.р. пользователя еще не прошел
       return years - 1
    } return years
  }

  /*------- приписка к возрасту (нужно доделать) -----*/

  const title = (years) => {
    if (years % 10 === 1) {
      return 'год'
    } else if (years % 10 === 2 || years % 10 === 3 || years % 10 === 4) {
      return 'года'
    } else return 'лет'
  }

  /*------ Проверяем, является ли карточка - карточкой активного пользователя ---*/

  const checkActiveUser = () => {
    return activeUser ? 'profile' : user.id
  }

  return (
    <div className='card'>
      <div className='card-wrapper'>
        <Link to={{ pathname : checkActiveUser() }} className='card-top-part'>
          <div className='card-top-part__img-container'>
           <img src={user.mainPhoto} alt='Фотография' style={{ backgroundColor : color }}/>
          </div>
          </Link>
          <div className='card-bottom-part'>
            <span>{user.firstName} {user.lastName}, {howOld(years, months, date)}</span>
            <div className='social-media'>
              <a href={user.media.instagram} target='_blank' className='media__wrapper'>
                <FontAwesomeIcon icon={faInstagram} title='Перейти' className='media'/>
              </a>
              <a href={user.media.vk} target='_blank' className='media__wrapper'>
                <FontAwesomeIcon icon={faVk} title='Перейти' className='media'/>
              </a>
              <a href={user.media.twitter} target='_blank' className='media__wrapper'>
                <FontAwesomeIcon icon={faTwitter} title='Перейти' className='media'/>
              </a>
              <Link to={{ pathname: checkActiveUser() }} className='media__wrapper'>
                <FontAwesomeIcon icon={faHome} title='Перейти на страницу' className='media'/>
              </Link>
            </div>
          </div>
       </div>
    </div>
  )
}
