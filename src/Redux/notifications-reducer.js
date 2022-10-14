import { NOTIFICATIONS_HANDLER, NOTIFICATIONS_CLOSE } from './types.js';

const initState = {
  isOpen : false,
  notifications : [],
}

export const notificationsReducer = (state = initState, action) => {
    switch (action.type) {
      case NOTIFICATIONS_HANDLER:
        return {
          ...state,
          isOpen : !state.isOpen,
        }
      case NOTIFICATIONS_CLOSE:
        return {
          ...state,
          isOpen : false,
        }
      default:
        return state
    }
}
