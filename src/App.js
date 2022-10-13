import { useState, useEffect } from 'react';
import { Header } from './Components/Header/header.js';
import { Footer } from './Components/Footer/footer.js';
import { Pages } from './Components/Pages/Pages.js';
import { AuthWrapper } from './Components/Auth/auth.js';
import { useSelector, useDispatch } from 'react-redux';
import { activeUserClose } from './Redux/actions.js';
import logo from './logo.svg';
import './App.css';

export const App = (props) => {

  const isOpenAuth = useSelector(state => {
    return state.activeUserReducer.isOpen
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const setState = (event) => event.key === 'Escape' ? dispatch(activeUserClose()) : ''

    window.addEventListener('keydown', setState)

    return () => {
      window.removeEventListener('keydown', setState)
    }
  })

  useEffect(() => {
    const setState = (event) => event.target.className === 'layout-visible' ? dispatch(activeUserClose()) : ''

    window.addEventListener('click', setState)

    return () => {
      window.removeEventListener('click', setState)
    }
  })

  return (
    <div className='wrapper'>
      <Header />
      { isOpenAuth && <AuthWrapper /> }
      <Pages />
      <Footer />
    </div>
  )
}
