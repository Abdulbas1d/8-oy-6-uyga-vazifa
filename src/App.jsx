import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<MainLayout><Home /></MainLayout>} />
      </Routes>
    </div>
  )
}

export default App
