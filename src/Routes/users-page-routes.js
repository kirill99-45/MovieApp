import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { UserPage } from 'C:/Users/User/github/movies/src/Components/Pages/AnotherPage/Container/Content/UsersPage/UserPage/user-page.js';
import { MainPage } from 'C:/Users/User/github/movies/src/Components/Pages/AnotherPage/Container/Content/UsersPage/MainPage/main-page.js';
import { ProfilePage } from 'C:/Users/User/github/movies/src/Components/Pages/AnotherPage/Container/Content/Profile/profile-page.js';

export const UsersPage = () => {

  const users = useSelector(state => {
    return state.usersReducer
  })

  const activeUserId = useSelector(state => {
    return state.activeUserReducer.user.id
  })

  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>                                                                                         //в пропсах передаем активного пользователя
      {
        users.map(user => {
          if (user.id !== activeUserId) {
            return <Route path={`${user.id}`} key={user.id} element={<UserPage user={user} />} />
          } return <Route path='profile' element={<ProfilePage />} />
        })
      }
    </Routes>
  )
}
