import {
  FILMS_ADD_COMMENT,
  USERS_GET_SUBSCRIBED,
  USERS_UNSUBSCRIBED,
  USERS_PHOTO_ADD_COMMENT,
  POSTS_ADD_COMMENT,
  ACTIVE_USER_CLOSE,
  ACTIVE_USER_LOGOUT,
  ACTIVE_USER_LOGIN,
  ACTIVE_USER_OPEN,
  BIG_PHOTO_OPEN,
  BIG_PHOTO_CLOSE,
} from './types.js'

export const filmsAddComment = () => {
  return {
    type : FILMS_ADD_COMMENT,
    payload : {  }
  }
}

export const usersGetSubscribed = () => {
  return {
    type : USERS_GET_SUBSCRIBED,
  }
}

export const usersUnubscribed = () => {
  return {
    type : USERS_UNSUBSCRIBED,
  }
}

export const usersPhotoAddComment = () => {
  return {
    type : USERS_PHOTO_ADD_COMMENT,
  }
}

export const postsAddComment = () => {
  return {
    type : POSTS_ADD_COMMENT,
  }
}

export const postsAddAnswer = () => {
  return {
    type : POSTS_ADD_COMMENT,
  }
}

export const activeUserOpen = () => {
  return {
    type : ACTIVE_USER_OPEN,
  }
}

export const activeUserClose = () => {
  return {
    type : ACTIVE_USER_CLOSE,
  }
}

export const activeUserLogin = (login, password) => {
  return {
    type : ACTIVE_USER_LOGIN,
    payload : { login, password },
  }
}

export const bigPhotoOpen = (data, index) => {
  return {
    type : BIG_PHOTO_OPEN,
    payload : { data, index }
  }
}

export const bigPhotoClose = () => {
  return {
    type : BIG_PHOTO_CLOSE,
  }
}
