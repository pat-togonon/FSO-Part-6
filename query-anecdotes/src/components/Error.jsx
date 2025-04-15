import { useErrorMessage, useErrorDispatch } from "../ErrorContext"

const ErrorNotif = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    color: 'red'
   }

  const errorMessage = useErrorMessage()
  const errorDispatch = useErrorDispatch()

  if (errorMessage === null) {
    return null
  }
  
  const notify = () => {
    setTimeout(() => {
        errorDispatch({ type: 'REMOVE_ERROR' })
      }, 5000)
  }

  return (
    <div style={style}>
      {errorMessage}
      {notify()}
    </div>
  )
}

export default ErrorNotif