import { Outlet } from 'react-router-dom';
import { Header } from './../Header/header.js';
import { Footer } from './../Footer/footer.js';
import { Sidebar } from './../Sidebar/sidebar.js';
import './layout.css';

export const Layout = () => {
  return (
    <div className='app__wrapper'>
      <Header />
      <div className='app__container'>
        <div className='app__sidebar-container'>
          <Sidebar />
        </div>
        <div className='app__container-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
