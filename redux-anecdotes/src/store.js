import { configureStore } from "@reduxjs/toolkit"
import filterReducer from './reducers/filterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import messageReducer from './reducers/messageReducer'

const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      forFilter: filterReducer,
      message: messageReducer
    }
})

console.log('store is', store)

export default store