import { useDispatch, useSelector } from "react-redux";
import { addVoteTo } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/messageReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch()
  
  console.log('state is ', useSelector(state => state))
  
  const anecdotes = useSelector(({ anecdotes, forFilter }) => {
    return anecdotes.filter(a => a.content.toLowerCase().includes(forFilter.toLowerCase()))
  })
  
 const handleVoteButton = async (id) => {    
    const anecdoteItem = anecdotes.find(a => a.id === id)
    dispatch(addVoteTo(anecdoteItem))
    dispatch(setNotification(`You voted ${anecdoteItem.content}`, 10))

  }

  const style = {
    marginBottom: 3
  }
  
  return (
    <div style={style}>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id} style={style}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVoteButton(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )

}
export default AnecdoteList