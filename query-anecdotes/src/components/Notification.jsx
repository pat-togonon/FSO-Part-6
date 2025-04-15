import { useNotificationMessage, useNotificationDispatch } from '../NotificationContext'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    color: 'green'
  }

  const notifMessage = useNotificationMessage()
  const notifDispatch = useNotificationDispatch()
  
  if (notifMessage === null) {
    return null
  }

  const notify = () => {
    setTimeout(() => {
        notifDispatch({ type: 'REMOVE_NOTIFICATION' })
      }, 5000)
  }

  return (
    <div style={style}>
      {notifMessage}
      {notify()}
    </div>
  )
}

export default Notification
