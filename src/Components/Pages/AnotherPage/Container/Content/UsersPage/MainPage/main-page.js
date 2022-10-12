import { useState, useEffect } from 'react';
import { UserCard } from './UserCard/user-card.js';
import { Search } from 'C:/Users/User/github/movies/src/Components/Search/search.js';
import { Filter } from './filter.js';
import './main-page.css';

export const MainPage = ({ users, activeUser }) => {

  const [color, setColor] = useState('#232931')

  useEffect(() => {
    window.scrollTo(0, 0)
    const getColor = () => setColor('')

    window.addEventListener('load', getColor)

    return () => {
      window.removeEventListener('load', getColor)
    }
  }, [])

  const [usersOnPage, setUsersOnPage] = useState(users)

  const [searchState, setSearchState] = useState([]);

  const [filterState, setFilterState] = useState('1')

  const usersFilter = (users, state, activeUser) => {
    switch (state) {
      case '1': {
        return users
      }
      case '2' : {
         const result = []
          users.forEach(user => {
            user.subscribs.filter(item => {
              if (item.id === activeUser) {
                result.push(user)
              }
            })
        })
        return result
        break;
      }
      case '3' : {
        const result = []
         users.forEach(user => {
           user.subscribers.filter(item => {
             if (item.id === activeUser) {
               result.push(user)
             }
           })
       })
         return result
         break;
       }
    }
  }

  const Users = ({ users, activeUser, color, filterState }) => {
    if (usersFilter(users, filterState, activeUser).length > 0) { // Проверка на то, есть ли кто-то в массиве
      return usersFilter(users, filterState, activeUser) // Формируем массив в зависимости от включенной опции радио кнопки
        .filter(user => user.firstName.includes(searchState)) // Фильтруем массив в зависимости от значения поисковой строки
        .map(user => <UserCard user={user} activeUser={ user.id === activeUser ? activeUser : null } color={color}/>) // Преобразуем массив в элементы HTML разметки
    } return <h3>Сначала нужно подписаться:)</h3> // На случай, если никого нет (нужно доработать)
  }

  return (
    <div className='users-page__wrapper'>
       <Search
         setUsers={setUsersOnPage}
         users={users}
         searchState={searchState}
         setSearchState={setSearchState}
       />
       <Filter
          setFilterState={setFilterState}
          filterState={filterState}
          activeUser={activeUser}
       />
       <div className='cards__container'>
       <Users
          users={users}
          activeUser={activeUser}
          color={color}
          filterState={filterState}
       />
      </div>
    </div>
  )
}
