import React, { useState, useEffect } from 'react'

import { Navbar } from './components'
import './App.css'

function App() {
  const [currentTabUrl, setCurrentTabUrl] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        setCurrentTabUrl(tabs[0]?.url);
      }
    });
  }, []);

  console.log(currentTabUrl)

  return (
    <div className="app">
      <Navbar />
      <h1>Project Hippo 🦛</h1>
      <h5>{currentTabUrl}</h5>
    </div>
  )
}

export default App
