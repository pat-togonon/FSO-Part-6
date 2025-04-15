import { forFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = (props) => {
  const dispatch = useDispatch()
    
  const handleChange = (event) => {
   console.log(event.target.value)
   const toFilter = event.target.value
   dispatch(forFilter(toFilter))
   
  }

  const style = {
    marginBottom: 10,
    marginTop: 10
  }

  return (
    <div style={style}>
        filter <input onChange={handleChange} />
    </div>
  )

}

export default Filter