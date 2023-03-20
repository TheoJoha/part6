import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, clearMessage } from '../reducers/messageReducer'
import anecdoteService from '../services/anecdotes'


const NewAnecdote = () => {
    const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = await event.target.anecdote.value
    console.log(content)
    event.target.value = ''
    // const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(content))
    dispatch(setMessage(`new anecdote '${content}'`))
    setTimeout(() => {dispatch(clearMessage())}, 5000)
    /* dispatch(createAnecdote(content))
    dispatch(setMessage(content)) */
    /* dispatch({
      type: 'NEW_ANECDOTE',
      payload: {content: content}
    }) */
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )

}

export default NewAnecdote