import {
  FILMS_ADD_COMMENT,

  USERS_GET_SUBSCRIBED,
  USERS_UNSUBSCRIBED,
  USERS_PHOTO_ADD_COMMENT,

  POSTS_ADD_COMMENT,
  POSTS_ADD_ANSWER,

  ACTIVE_USER_HANDLE,
  ACTIVE_USER_LOGOUT,
  ACTIVE_USER_LOGIN,

  BIG_PHOTO_OPEN,
  BIG_PHOTO_CLOSE,

  NOTIFICATIONS_HANDLER,
  NOTIFICATIONS_CLOSE,

} from './types.js'

/* -----------------FILMS----------------- */

export const filmsAddComment = () => {
  return {
    type : FILMS_ADD_COMMENT,
    payload : {  }
  }
}

/* -----------------USERS----------------- */

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

/* -----------------POSTS----------------- */

export const postsAddComment = (id, author, text) => {
  return {
    type : POSTS_ADD_COMMENT,
    payload : { id, author, text }
  }
}

export const postsAddAnswer = (id, comment, author, text, answer = null, consumer) => {
  return {
    type : POSTS_ADD_ANSWER,
    payload : { id, comment, author, text, answer, consumer }
  }
}

/* -----------------ACTIVE_USER----------------- */

export const activeUserHandle = () => {
  return {
    type : ACTIVE_USER_HANDLE,
  }
}


export const activeUserLogin = (login, password) => {
  return {
    type : ACTIVE_USER_LOGIN,
    payload : { login, password },
  }
}

/* -----------------BIG_PHOTO----------------- */

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

/* -----------------NOTIFICATIONS----------------- */

export const notificationsHandler = () => {
  return {
    type : NOTIFICATIONS_HANDLER,
  }
}

export const notificationsCLose = () => {
  return {
    type : NOTIFICATIONS_CLOSE,
  }
}
