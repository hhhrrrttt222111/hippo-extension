import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'

import amazon from '../../assets/svg/amazon.svg'
import flipkart from '../../assets/svg/flipkart.svg'

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
            <div className='landing__browse'>
                <h4>Deals of the day</h4>
                <div className="landind_deals">
                    <a href='https://www.amazon.in/gp/goldbox?ref_=nav_cs_gb' target='_blank' className='ld_card'>
                        <img src={amazon} alt="" />
                    </a>
                    <a href='https://www.flipkart.com/' target='_blank' className='ld_card'>
                        <img src={flipkart} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing