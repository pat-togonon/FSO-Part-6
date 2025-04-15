import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationContextProvider } from './NotificationContext'
import { ErrorContextProvider } from './ErrorContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <NotificationContextProvider>
      <ErrorContextProvider>
        <App />
      </ErrorContextProvider>
    </NotificationContextProvider>
  </QueryClientProvider>
)