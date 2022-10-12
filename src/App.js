import { useState, useEffect } from 'react';
import { Header } from './Components/Header/header.js';
import { Footer } from './Components/Footer/footer.js';
import { Pages } from './Components/Pages/Pages.js';
import { Auth } from './Components/Auth/auth.js';
import { useSelector } from 'react-redux'
import logo from './logo.svg';
import './App.css';

export const App = (props) => {

  const [activeUser, setActiveUser] = useState('Аноним')

  const [layoutState, setLayoutState] = useState('layout-hidden')

  useEffect(() => {
    const setState = (event) => {
      if (event.key === 'Escape') {
        setLayoutState('layout-hidden')
      }
    }

    window.addEventListener('keydown', setState)

    return () => {
      window.removeEventListener('keydown', setState)
    }
  })

  useEffect(() => {
    const setState = (event) => {
      if (layoutState === 'layout-visible' && event.target.className === 'layout-visible') {
        setLayoutState('layout-hidden')
      }
    }

    window.addEventListener('click', setState)

    return () => {
      window.removeEventListener('click', setState)
    }
  })

  return (
    <div className='wrapper'>
      <Header
        activeUser={activeUser}
        layoutState={layoutState}
        setLayoutState={setLayoutState}
      />
      <Pages
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        setLayoutState={setLayoutState}
      />
      <Footer />
      <Auth
        layoutState={layoutState}
        setLayoutState={setLayoutState}
        setActiveUser={setActiveUser}
        activeUser={activeUser}
      />
    </div>
  )
}
