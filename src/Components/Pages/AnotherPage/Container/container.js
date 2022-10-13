import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Sidebar/sidebar.js';
import { FilmsPage } from 'C:/Users/User/github/movies/src/Routes/films-page-routes';
import { ProfilePage } from './Content/Profile/profile-page.js';
import { UsersPage } from 'C:/Users/User/github/movies/src/Routes/users-page-routes';
import { PostsPage } from 'C:/Users/User/github/movies/src/Routes/posts-page-routes';
import { Server } from './Content/Server/server.js';
import { NotFound } from './Content/NotFound/not-found.js';
import './container.css';

export const Container = () => {

  const activeUser = useSelector(state => {
    return state.activeUserReducer.user
  })

  return (
    <div className='container'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='container-content'>
        <Routes>
          <Route path='/MovieApp/films/*' element={<FilmsPage />} />
          { activeUser.id && <Route path='/MovieApp/profile' element={<ProfilePage />} /> }
          <Route path='/MovieApp/users/*' element={<UsersPage />} />
          <Route path='/MovieApp/server/*' element={<Server />} />
          <Route path='/MovieApp/posts/*' element={<PostsPage />} />
          <Route path='/MovieApp/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
