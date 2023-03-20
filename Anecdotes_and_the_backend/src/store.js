import filterReducer from './reducers/filterReducer'
import messageReducer from './reducers/messageReducer'
import { configureStore } from '@reduxjs/toolkit'
// import anecdoteService from './services/anecdotes'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'

/* anecdoteService.getAll().then(anecdotes =>
    store.dispatch(setAnecdotes(anecdotes))
  ) */

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    message: messageReducer
  }})




export default store