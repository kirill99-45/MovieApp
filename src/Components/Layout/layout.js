import { Outlet } from 'react-router-dom';
import { Header } from './../Header/header.js';
import { Footer } from './../Footer/footer.js';
import { Sidebar } from './../Sidebar/sidebar.js';
import { AuthWrapper } from './../Auth/auth.js';
import { useSelector } from 'react-redux';
import './layout.css';

export const Layout = () => {

  const isAuthWrapperOpen = useSelector(state => {
    return state.activeUserReducer.isOpen
  })

  return (
    <div className='app__wrapper'>
      { isAuthWrapperOpen && <AuthWrapper /> }
      <Header />
      <div className='app__container'>
        <div className='app__sidebar-container'>
          <Sidebar />
        </div>
        <div className='app__container-content'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
