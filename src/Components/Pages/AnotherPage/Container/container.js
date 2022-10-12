import {Routes, Route} from 'react-router-dom';
import Sidebar from './Sidebar/sidebar.js';
import { FilmsPage } from 'C:/Users/User/github/movies/src/Routes/films-page-routes';
import { ProfilePage } from './Content/Profile/profile-page.js';
import { UsersPage } from 'C:/Users/User/github/movies/src/Routes/users-page-routes';
import { PostsPage } from 'C:/Users/User/github/movies/src/Routes/posts-page-routes';
import Server from './Content/Server/server.js';
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
          <Route path='react-first-app/films/*' element={
            <FilmsPage
              activeUser={activeUser}
              setLayoutState={setLayoutState}
            />}
           />
          <Route path='react-first-app/profile' element={
            <ProfilePage
             activeUser={activeUser}
             />}
          />
          <Route path='react-first-app/users/*' element={
            <UsersPage
             activeUser={activeUser}
             setLayoutState={setLayoutState}
            />}
          />
          <Route path='react-first-app/server/*' element={<Server />} />
          <Route path='react-first-app/posts/*' element={
            <PostsPage
              activeUser={activeUser}
              setLayoutState={setLayoutState}
            />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
