import React from 'react'
import StatusChecker from './components/MAUIOnlineStatusBadge'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Website Status Checker</h1>
        <StatusChecker />
      </div>
    </div>
  )
}

export default App

