import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'

import { UserContext } from '../../contexts/UserContext';

import amazon from '../../assets/svg/amazon.svg'
import flipkart from '../../assets/svg/flipkart.svg'

function Landing() {

    const [currentTabUrl, setCurrentTabUrl] = useState("");

    // const chrome = window.chrome;

    const { user, userName } = useContext(UserContext)

    // Get the current tab
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var tabURL = tabs[0].url;
        console.log(tabURL)
    });
    // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //     // Get the HTML code of the current tab
    //     chrome.tabs.executeScript(tabs[0].id, { code: 'document.documentElement.outerHTML' }, function (html) {
    //         // Log the HTML code to the console
    //         console.log(tabs[0].url)
    //     });
    // });


    return (
        <div className='landing'>
            <div className='landing__header'>
                {user !== 'null' ? (
                    <h3>Welcome back <br /> <span>{userName}!</span></h3>
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