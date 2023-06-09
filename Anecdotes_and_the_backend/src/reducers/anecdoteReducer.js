import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

// const anecdotesAtStart = [
  /* 'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
//] */

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

/* export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
    }
  }
} */

/* export const makeVote = (id) => {
  return {
    type: 'INCREMENT',
    id: id
  }
} */

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    makeVote(state, action) {
      // console.log(action)
      // console.log(action.payload)
      const anecdoteToChange = state.find(n => n.id === action.payload.id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1 
      }
      return state.map(anecdote =>
        anecdote.id !== action.payload.id ? anecdote : changedAnecdote 
      )     
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

/* const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action ', action)
  

  switch (action.type) {
    case 'INCREMENT':
      const id = action.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote 
      )
    case 'NEW_ANECDOTE':
      let newAnecdote = asObject(action.payload.content)
      return state.concat(newAnecdote)
        

      // let newObject = {}
    default: // if none of the above matches, code comes here
      return state
  }
} */

/* export default anecdoteReducer */

export const { setAnecdotes, appendAnecdote, makeVote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const increaseAnecdote = anecdote => {
  return async dispatch => {
    const incrementedAnecdote = await anecdoteService.incrementAnecdote(anecdote)
    console.log(incrementedAnecdote)
    dispatch(makeVote(incrementedAnecdote))
  }
}

export default anecdoteSlice.reducer