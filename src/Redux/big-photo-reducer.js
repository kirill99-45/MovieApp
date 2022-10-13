import { BIG_PHOTO_OPEN, BIG_PHOTO_CLOSE } from './types.js';

const initState = {
  isOpen : false,
  data : null,
  index : null,
}

export const bigPhotoReducer = (state = initState, action) => {
  switch (action.type) {
    case BIG_PHOTO_OPEN: {
      const { data, index } = action.payload
      return {
        isOpen : true,
        data : data,
        index : index,
      }
    }
    case BIG_PHOTO_CLOSE: {
      return {
        ...state,
        data : null,
        index : null,
        isOpen : false,
      }
    }
    default:
      return state
  }
}
