import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query'
import { getAll, updateVote } from './requests'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {

  const queryClient = useQueryClient()

  const voteMutation = useMutation({
    mutationFn: updateVote,
    onSuccess: (updatedAnecdote) => {
      const anecdoteList = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdoteList.map(a => a.id === updatedAnecdote.id ? updatedAnecdote : a))
    }
  })
  
  const notifDispatch = useNotificationDispatch()
  
  const handleVote = (anecdote) => {
    voteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1})
    notifDispatch({ type: 'SET_NOTIFICATION', payload: `You voted ${anecdote.content}`})
  }
  
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: 1
  })
  console.log('result is', JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return <div>anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />      
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
