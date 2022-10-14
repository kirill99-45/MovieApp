import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './Components/Pages/HomePage/main-page.js';
import { MainPostsPage } from './Components/Pages/PostsPage/MainPage/main-page.js';
import { MainFilmsPage } from './Components/Pages/FilmsPage/MainFilmPage/main-film-page.js';
import { FilmPage } from './Components/Pages/FilmsPage/FilmPage/film-page.js';
import { PostPage } from './Components/Pages/PostsPage/PostPage/post-page.js';
import { ProfilePage } from './Components/Pages/ProfilePage/profile-page.js';
import { MainUsersPage } from './Components/Pages/UsersPage/MainPage/main-page.js';
import { UserPage } from './Components/Pages/UsersPage/UserPage/user-page.js';
import { ServerPage } from './Components/Pages/ServerPage/server.js';
import { NotFound } from './Components/Pages/NotFound/not-found.js';
import { Layout } from './Components/Layout/layout.js';

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='posts' element={<MainPostsPage />} />
        <Route path='posts/:id' element={<PostPage/>} />
        <Route path='films' element={<MainFilmsPage/>} />
        <Route path='films/:link' element={<FilmPage/>} />
        <Route path='profile' element={<ProfilePage/>} />
        <Route path='users' element={<MainUsersPage/>} />
        <Route path='users/:id' element={<UserPage/>} />
        <Route path='server' element={<ServerPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  )
}
