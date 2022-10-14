import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './server.css';
import { Search } from 'C:/Users/User/github/movies/src/Components/Search/search.js';
import { Page } from './page.js';

export const ServerPage = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [dataState, setDataState] = useState({
    loading : true,
    posts : [],
  })

  const [countOnPage, setCountOnPage] = useState(10)
  const [countOfPosts, setCountOfPosts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const wrapperRef = useRef(null)

  useEffect(() => {
    if (dataState.loading) {
      axios.get(`https://jsonplaceholder.typicode.com/posts?&_page=${currentPage}&_limit=${countOnPage}`)
      .then(resp => {
        setCountOfPosts(resp.headers['x-total-count']);
        setCurrentPage(currentPage + 1)
        setDataState({ loading : false, posts : [...dataState.posts, ...resp.data] })
      })
    }
  }, [dataState.loading])

  useEffect(() => {
    const getNewPosts = () => {
      if (wrapperRef.current.clientHeight - window.scrollY < 1000 && currentPage <= Math.ceil(countOfPosts / countOnPage)) {
        setDataState({ ...dataState, loading : true })
      }
    }

    window.addEventListener('scroll', getNewPosts)

    return () => {
      window.removeEventListener('scroll', getNewPosts)
    }
  })

  return (
    <div className='server__wrapper' ref={wrapperRef}>
      <h1>Записи с сервера</h1>
      <Search />
      <div className='server__container'>
      <div className='posts__container'>
        <Page posts={dataState.posts}/>
      </div>
      </div>
    </div>
  )
}
