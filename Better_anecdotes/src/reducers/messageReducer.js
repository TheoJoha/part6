import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'



let initialState = 'hey'


const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
      setMessage(state, action) {
        const content = action.payload
        return content
      },
    },
  })

  export const {setMessage } = messageSlice.actions
  export default messageSlice.reducer