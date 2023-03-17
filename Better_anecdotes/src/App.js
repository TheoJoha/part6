// import { useSelector, useDispatch, useState } from 'react-redux'
// import reducer from './reducers/anecdoteReducer.js'
import Anecdotes from "./components/AnecdoteList"
import NewAnecdote from "./components/AnecdoteForm"
import VisibilityFilter from "./components/VisibilityFilter"
import Notification from "./components/Notification"



const App = () => {
  // const anecdotes = useSelector(state => state)
  const filterSelected = (value) => {
    console.log(value)
  }

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