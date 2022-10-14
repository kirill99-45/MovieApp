import { users } from './users-reducer.js';
import {
  ACTIVE_USER_LOGIN,
  ACTIVE_USER_LOGOUT,
  ACTIVE_USER_HANDLE,
} from './types.js';

const initState = {
  user : {
    firstName : 'Аноним',
  },
  isOpen : false,
}

export const activeUserReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIVE_USER_LOGIN: {
      const { login, password } = action.payload
      for (let i = 0; i < users.length; i++) {
        if (users[i].account.login == login) {
          if (users[i].account.password === password) {
            return {
              ...state,
              user : {
                ...users[i],
              },
              isOpen : false,
            }
          }
        }
      }
    }

      break;
    case ACTIVE_USER_LOGOUT: {

    }
    case ACTIVE_USER_HANDLE: {
      return {
        ...state,
        isOpen : !state.isOpen,
      }
    }
    default:
      return state

  }
}
