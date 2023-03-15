import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
    const dispatch = useDispatch()



  const addAnecdote = async (event) => {
    event.preventDefault()
    
    const content = await event.target.anecdote.value
    console.log(content)
    event.target.value = ''
    dispatch(createAnecdote(content))
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