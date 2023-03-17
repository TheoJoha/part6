import { useSelector, useDispatch } from 'react-redux'
import { makeVote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/messageReducer'

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

    const vote = (id) => {
        console.log('vote', id)
        // const action = {type: 'INCREMENT',
        // id: id
        // }
        // vote(action)
        // reducer(action)
        dispatch(makeVote(id))
        dispatch(setMessage(anecdotes.filter(anecdote => anecdote.id == id)[0].content))
      }

  return (
        anecdotes.slice().sort((a, b) => a.votes - b.votes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )
    )
}

export default Anecdotes