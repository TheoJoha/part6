import { useSelector, useDispatch } from 'react-redux'
import { setMessage } from '../reducers/anecdoteReducer'


const Notification = () => {
    const notification = useSelector(state => { return state.message})
    console.log(notification)
    
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  
  export default Notification