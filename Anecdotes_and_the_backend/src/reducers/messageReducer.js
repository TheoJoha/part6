import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'



let initialState = 'hey'


const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
      setMessage(state, action) {
        // const content = action.payload
        // return content
        console.log(action, 'hey')
      },
      newText(state, action) {
        const content = action.payload
        return content
      },
      clearMessage(state, action) {
        const content = ''
        return content
      }
    },
  })

  export const {setMessage, clearMessage } = messageSlice.actions
  export default messageSlice.reducer