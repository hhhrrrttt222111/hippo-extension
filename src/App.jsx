import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components'
import { Landing } from './pages';

import './App.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>      
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
