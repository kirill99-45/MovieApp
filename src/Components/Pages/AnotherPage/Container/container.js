import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Sidebar/sidebar.js';
import { FilmsPage } from 'C:/Users/User/github/movies/src/Routes/films-page-routes';
import { ProfilePage } from './Content/Profile/profile-page.js';
import { UsersPage } from 'C:/Users/User/github/movies/src/Routes/users-page-routes';
import { PostsPage } from 'C:/Users/User/github/movies/src/Routes/posts-page-routes';
import { Server } from './Content/Server/server.js';
import { NotFound } from './Content/NotFound/not-found.js';
import './container.css';

export const Container = ({ activeUser, setLayoutState }) => {

  return (
    <div className='container'>
      <div className='sidebar-container'>
        <Sidebar activeUser={activeUser}/>
      </div>
      <div className='container-content'>
        <Routes>
          <Route path='/MovieApp/films/*' element={
            <FilmsPage
              activeUser={activeUser}
              setLayoutState={setLayoutState}
            />}
           />
          <Route path='/MovieApp/profile' element={
            <ProfilePage
             activeUser={activeUser}
             />}
          />
          <Route path='/MovieApp/users/*' element={
            <UsersPage
             activeUser={activeUser}
             setLayoutState={setLayoutState}
            />}
          />
          <Route path='/MovieApp/server/*' element={<Server />} />
          <Route path='/MovieApp/posts/*' element={
            <PostsPage
              activeUser={activeUser}
              setLayoutState={setLayoutState}
            />}
          />
          <Route path='/MovieApp/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
