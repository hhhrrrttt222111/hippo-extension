import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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

        // console.log(currentTabUrl)
    }

    const loggedIn = false

    return (
        <div className='landing'>
            <div className='landing__header'>
                {loggedIn ? (
                    <h3>Welcome back <br /> <span>Hemanth!</span></h3>
                ) : (
                    <>
                        <h4>Login to continue</h4>
                        <Link to='/login'>
                            <button>Login</button>
                        </Link>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Landing