import React, { useState } from 'react'

import './Landing.css'

function Landing() {

    const [currentTabUrl, setCurrentTabUrl] = useState("");

    const chrome = window.chrome;

    const handleClick = () => {
        setTimeout(function() {

            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              const url = tabs[0].url;
              setCurrentTabUrl(url);
            });
          }, 500); 

        console.log(currentTabUrl)
    }

    return (
        <div className='landing'>
            <button onClick={handleClick}>click</button>
            <h2>{currentTabUrl}</h2>
        </div>
    )
}

export default Landing