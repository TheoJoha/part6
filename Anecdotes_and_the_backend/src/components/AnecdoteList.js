import { useSelector, useDispatch } from 'react-redux'
// import { makeVote } from '../reducers/anecdoteReducer'
import { setMessage, clearMessage } from '../reducers/messageReducer'
import { increaseAnecdote } from '../reducers/anecdoteReducer'

const Anecdotes = (props) => {
  const anecdotes = useSelector(state => {
      if (state.filter === '') {
        return state.anecdotes
    }
      else {
        console.log(state.anecdotes)
        return state.anecdotes.filter(anecdote => anecdote.content.slice(0, state.filter.length) == state.filter)
      } 
    })

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        // const action = {type: 'INCREMENT',
        // id: id
        // }
        // vote(action)
        // reducer(action)
        dispatch(increaseAnecdote(anecdote))
        // dispatch(setMessage(anecdote.content))
        dispatch(setMessage(`you voted '${anecdote.content}'`, 10))

        /* dispatch(setMessage(`Voted for '${anecdote.content}'`))
        
        setTimeout(() => {dispatch(clearMessage())}, 5000) */
      }

  return (
        anecdotes.slice().sort((a, b) => a.votes - b.votes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )
    )
}

export default Anecdotes