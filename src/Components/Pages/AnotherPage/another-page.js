import { Container } from './Container/container.js';

export const AnotherPage = ({ activeUser, setLayoutState }) => {
  return <Container activeUser={activeUser} setLayoutState={setLayoutState}/>
}
