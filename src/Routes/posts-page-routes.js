import { Routes, Route } from 'react-router-dom';
import { PostPage } from './../Components/Pages/AnotherPage/Container/Content/PostsPage/PostPage/post-page.js';
import { MainPage } from './../Components/Pages/AnotherPage/Container/Content/PostsPage/MainPage/main-page.js';
import { useSelector } from 'react-redux';

export const PostsPage = ({ activeUser, setLayoutState, addNewCommentPost }) => {

  const posts = useSelector((state) => {
    return state.postsReducer
  })

  return (
    <Routes>
      <Route path='/' element={<MainPage posts={posts}/>} />
      {
        posts.map(item => {
          return <Route path={`/${item.id}`} element={
            <PostPage post={item} activeUser={activeUser} setLayoutState={setLayoutState}/>} />
        })
      }
    </Routes>
  )
}
