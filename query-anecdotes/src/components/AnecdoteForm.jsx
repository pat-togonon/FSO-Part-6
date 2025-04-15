import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useNotificationDispatch } from "../NotificationContext"
import ErrorNotif from "./Error" 
import { useErrorDispatch } from "../ErrorContext"

const AnecdoteForm = () => {

  const errorDispatch = useErrorDispatch()

  const queryClient = useQueryClient()
  const notifDispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      notifDispatch({ type: 'SET_NOTIFICATION', payload: `You added in ${newAnecdote.content}`})
    },
    onError: (error) => {
      errorDispatch({ type: 'SET_ERROR', payload: error.response.data.error })      
    }
  })  

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    
  }

  return (
    <div>
      <h3>create new</h3>
      <ErrorNotif />
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
