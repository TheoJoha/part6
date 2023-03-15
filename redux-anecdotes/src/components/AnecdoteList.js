import { useSelector, useDispatch } from 'react-redux'
import { makeVote } from '../reducers/anecdoteReducer'

const Anecdotes = (props) => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        const action = {type: 'INCREMENT',
        id: id
        }
        // vote(action)
        // reducer(action)
        dispatch(makeVote(id)
        )
      }

    return (
        anecdotes.sort((a, b) => a.votes - b.votes).map(anecdote =>
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