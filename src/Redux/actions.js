import { FILMS_ADD_COMMENT, USERS_GET_SUBSCRIBED, USERS_UNSUBSCRIBED,
  USERS_PHOTO_ADD_COMMENT, POSTS_ADD_COMMENT,
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
