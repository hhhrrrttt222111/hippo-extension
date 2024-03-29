import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";

import './Landing.css'
import { AmzSearch } from '../../components'
import { UserContext } from '../../contexts/UserContext';

import amazon from '../../assets/svg/amazon.svg'
import flipkart from '../../assets/svg/flipkart.svg'

const ADD_BOOKMARK = '/product/add-bookmark'

function Landing() {

    const [tabUrl, setTabUrl] = useState("");
    const [profile, setProfile] = useState()
    const [minPrice, setMinPrice] = useState('')

    const { user, userToken } = useContext(UserContext)

    useEffect(() => {
        async function getUserProfile() {
        try {
            await axios.get(`${import.meta.env.VITE_APP_MAIN_API}/user/profile/${user}`, {
            headers: {
                authorization: `Bearer ${userToken}`,
            }
            })
            .then((res) => {
                // console.log(res)
                setProfile(res.data.data)
            })
        } catch (error) {
            console.error(error)
        }
        }
        if(user !== 'null')
            getUserProfile()
    }, [user, userToken])


    // Get the current tab
    chrome?.tabs?.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        console.log(tabs)
        var tabURL = tabs[0].url;
        setTabUrl(tabURL)
    });

    const urlSegments = tabUrl.split("/");
    // console.log(urlSegments)
    const domain = urlSegments[2]?.split(".")[1]

    const addBookmark = (e) => {

        e.preventDefault()

        if(minPrice) {
            const userData = {
                id: profile?._id,
                email: profile?.email
            }


    
            const data = {
                userData,
                productData: {
                    uid: `${domain}-${urlSegments[5].slice(0, 10)}`,
                    name: urlSegments[3],
                    url: tabUrl,
                    min_price: minPrice,
                    platform: domain,
                    userId: profile?._id,
                }
            }
        
            axios.post(`${import.meta.env.VITE_APP_MAIN_API}${ADD_BOOKMARK}`, data, {
                headers: {
                    authorization: `Bearer ${userToken}`,
                }
              })
            .then((res) => {
                console.log(res)
                alert('Added to favourites')
                setMinPrice(0)
            }).catch(err => {
                // alert(err.response.data.error)
                console.log(err.response)
            })
        } else {
            alert('Enter Minimum Proce')
        }
    }

    return (
        <div className='landing'>
            <div className='landing__header'>
                {user && user !== 'null' ? (
                    <h3>Welcome back <br /> <span>{profile?.name}!</span></h3>
                ) : (
                    <>
                        <h4>Login to continue</h4>
                        <Link to='/login'>
                            <button>Login</button>
                        </Link>
                    </>
                )}
                {user && user !== 'null' && (
                    <a href="https://hippo-project.vercel.app/profile" target='_blank' rel='noreferrer'>
                        <AiOutlineUser className='profile_icon'/>
                    </a>
                )}
            </div>

            {user && user !== 'null' && (
                <div className='landing__bookmark'>
                    {(urlSegments[4] === 'dp' || urlSegments[4] === 'p') && (                    
                        <form onSubmit={addBookmark} className='bookmark_form'>
                            <h2>{urlSegments[3]}</h2>
                            <input className='addFav__input' valu={minPrice} onChange={(e) => setMinPrice(e.target.value)} type='text' placeholder='Min. Price' />
                            <button className='addFav_submit' type='submit'>Add</button>
                        </form>
                    )}
                </div>
            )}

            <div className='landing__browse'>
                <h4>Deals of the day</h4>
                <div className="landing_deals">
                    <a href='https://www.amazon.in/gp/goldbox?ref_=nav_cs_gb' target='_blank' className='ld_card'>
                        <img src={amazon} alt="" />
                    </a>
                    <a href='https://www.flipkart.com/' target='_blank' className='ld_card'>
                        <img src={flipkart} alt="" />
                    </a>
                </div>
            </div>

            <div className='landing__search'>
                <AmzSearch />
            </div>
        </div>
    )
}

export default Landing