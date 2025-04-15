import { createContext, useContext, useReducer } from "react"

const errorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload
    case 'REMOVE_ERROR':
      return null
    default:
      return state
  }
}

const ErrorContext = createContext()

export const ErrorContextProvider = (props) => {
  const [error, errorDispatch] = useReducer(errorReducer, null)

  return (
    <ErrorContext.Provider value={[error, errorDispatch]}>
        {props.children}
    </ErrorContext.Provider>
  )
}

export const useErrorMessage = () => {
  const errorAndDispatch = useContext(ErrorContext)
  return errorAndDispatch[0]
}

export const useErrorDispatch = () => {
    const errorAndDispatch = useContext(ErrorContext)
    return errorAndDispatch[1]
}

export default ErrorContext