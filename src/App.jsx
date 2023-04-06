import React, { useState, useEffect } from 'react'

import { Navbar } from './components'
import './App.css'

function App() {
  const [currentTabUrl, setCurrentTabUrl] = useState("");

  // useEffect(() => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //     if (tabs.length > 0) {
  //       setCurrentTabUrl(tabs[0]?.url);
  //     }
  //   });
  // }, []);

  const chrome = window.chrome;


setTimeout(function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const url = tabs[0].url;
    setCurrentTabUrl(url);
  });
}, 1000); // Wait for 1 second before using the chrome API


  console.log(currentTabUrl)

  return (
    <div className="app">
      <Navbar />
      <h1>Project Hippoooooo 🦛</h1>
      <h5>{currentTabUrl}</h5>
    </div>
  )
}

export default App
