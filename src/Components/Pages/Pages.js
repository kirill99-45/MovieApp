import { useState } from 'react';
import { MainPage } from './Main-page/main-page.js';
import { AnotherPage } from './AnotherPage/another-page.js';

export const Pages = (props) => {

  const [pathnameState, setPathNameState] = useState('/react-first-app');

  const uppState = () => {
    setPathNameState(window.location.pathname)
  }

  return (
    <>
    {
      window.location.pathname === '/react-first-app/' ?
      <MainPage uppState={uppState} activeUser={props.activeUser} /> :
      <AnotherPage setLayoutState={props.setLayoutState} activeUser={props.activeUser}  />
    }
    </>
  )
}
