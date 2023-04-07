import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Login } from './components'
import { Landing } from './pages';

import './App.css'

function App() {

  return (
    <div className="app">
      <MemoryRouter>      
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </MemoryRouter>
    </div>
  )
}

export default App
