import {
  FILMS_ADD_COMMENT,
  USERS_GET_SUBSCRIBED,
  USERS_UNSUBSCRIBED,
  USERS_PHOTO_ADD_COMMENT,
  POSTS_ADD_COMMENT,
  ACTIVE_USER_HANDLE,
  ACTIVE_USER_LOGOUT,
  ACTIVE_USER_LOGIN,
  NOTIFICATIONS_HANDLER,
  BIG_PHOTO_OPEN,
  BIG_PHOTO_CLOSE,
  NOTIFICATIONS_CLOSE,
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
