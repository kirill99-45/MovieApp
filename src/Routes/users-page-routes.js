import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { UserPage } from 'C:/Users/User/github/movies/src/Components/Pages/AnotherPage/Container/Content/UsersPage/UserPage/user-page.js';
import { MainPage } from 'C:/Users/User/github/movies/src/Components/Pages/AnotherPage/Container/Content/UsersPage/MainPage/main-page.js';
import { ProfilePage } from 'C:/Users/User/github/movies/src/Components/Pages/AnotherPage/Container/Content/Profile/profile-page.js';

export const UsersPage = ({ activeUser, setLayoutState }) => {

  const users = useSelector((state) => {
    return state.usersReducer
  })

  return (
    <Routes>
      <Route path='/' element={<MainPage users={users} activeUser={activeUser.id}/>}/>                                                                                         //в пропсах передаем активного пользователя
      {
        users.map(user => {
          if (user.id !== activeUser.id) {
            return (
            <Route path={`${user.id}`} key={user.id} element={
              <UserPage
                user={user}
                activeUser={activeUser}
                setLayoutState={setLayoutState}
                />}
              />
            )
          } return <Route path='profile' element={<ProfilePage activeUser={activeUser}/>} />
        })
      }
    </Routes>
  )
}
