import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: 'message',
  initialState: null,
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    removeMessage(state, action) {
      return null
    }
  }
})

export const { setMessage, removeMessage } = messageSlice.actions

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    dispatch(setMessage(notification))
    setTimeout(() => {
      dispatch(removeMessage())
    }, time * 1000)  
  }
}

export default messageSlice.reducer