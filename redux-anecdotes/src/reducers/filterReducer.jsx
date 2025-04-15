import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const filterSlice = createSlice({
  name: 'forFilter',
  initialState,
  reducers: {
    forFilter(state, action) {
      return action.payload
    }
  }
})

export const { forFilter } = filterSlice.actions

export default filterSlice.reducer