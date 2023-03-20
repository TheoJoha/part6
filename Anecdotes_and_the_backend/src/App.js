// import { useSelector, useDispatch, useState } from 'react-redux'
// import reducer from './reducers/anecdoteReducer.js'
import Anecdotes from "./components/AnecdoteList"
import NewAnecdote from "./components/AnecdoteForm"
import VisibilityFilter from "./components/VisibilityFilter"
import Notification from "./components/Notification"
import { useEffect } from 'react'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'



const App = () => {
  // const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  /* useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch]) */

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <div>
      <VisibilityFilter />
      </div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App