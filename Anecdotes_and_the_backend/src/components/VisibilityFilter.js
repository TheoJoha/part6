import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
      filter    
      <input 
        name="filter" 
        // value=""
        onChange={(e) => dispatch(filterChange(e.target.value))}
      />
    </div>
  )
}


export default VisibilityFilter