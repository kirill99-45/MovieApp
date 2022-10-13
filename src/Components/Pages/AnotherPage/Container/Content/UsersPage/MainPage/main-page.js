import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserCard } from './UserCard/user-card.js';
import { Search } from 'C:/Users/User/github/movies/src/Components/Search/search.js';
import { Filter } from './filter.js';
import './main-page.css';

export const MainPage = () => {

  const users = useSelector(state => {
    return state.usersReducer
  })

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  useEffect(() => {
    window.scrollTo(0, 0)
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
              if (item.id === activeUser.id) {
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
             if (item.id === activeUser.id) {
               result.push(user)
             }
           })
       })
         return result
         break;
       }
    }
  }

  const Users = () => {
    if (usersFilter(users, filterState, activeUser).length > 0) {
      return usersFilter(users, filterState, activeUser)
        .filter(user => user.firstName.includes(searchState))
        .map(user => <UserCard user={user}/>)
    } return <h3>Сначала нужно подписаться:)</h3>
  }

  return (
    <div className='users-page__wrapper'>
       <Search
         setUsers={setUsersOnPage}
         users={users}
         searchState={searchState}
         setSearchState={setSearchState}
       />
       { activeUser.id && <Filter setFilterState={setFilterState} filterState={filterState} /> }
       <div className='cards__container'>
       <Users filterState={filterState} />
      </div>
    </div>
  )
}
