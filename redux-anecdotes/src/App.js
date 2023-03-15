import { useSelector, useDispatch } from 'react-redux'
// import reducer from './reducers/anecdoteReducer.js'
import Anecdotes from "./components/AnecdoteList"
import NewAnecdote from "./components/AnecdoteForm"





const App = () => {
  // const anecdotes = useSelector(state => state)
  

  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App