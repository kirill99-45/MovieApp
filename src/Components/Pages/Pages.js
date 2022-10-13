import { useState } from 'react';
import { MainPage } from './Main-page/main-page.js';
import { AnotherPage } from './AnotherPage/another-page.js';

export const Pages = (props) => {

  const [pathnameState, setPathNameState] = useState('MovieApp');

  const uppState = () => {
    setPathNameState(window.location.pathname)
  }

  return (
    <>
    {
      window.location.pathname === '/MovieApp/' ?
      <MainPage uppState={uppState} activeUser={props.activeUser} /> :
      <AnotherPage activeUser={props.activeUser}/>
    }
    </>
  )
}
