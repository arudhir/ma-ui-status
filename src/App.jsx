import React from 'react'
import MAUIOnlineStatusBadge from './components/MAUIOnlineStatusBadge'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Massachusetts UI Online Status</h1>
        <MAUIOnlineStatusBadge />
      </div>
    </div>
  )
}

export default App


