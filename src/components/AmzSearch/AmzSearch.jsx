import React, { useState, useContext } from 'react'
import { FiSearch } from "react-icons/fi";
import axios from 'axios';

import { UserContext } from '../../contexts/UserContext';

function AmzSearch() {

    const [searchString, setSearchString] = useState("");

    const { user, userToken } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchUrl = `https://www.amazon.in/s?k=${searchString}`;
        // window.location.href = searchUrl;

        if(user !== 'null' && searchString) {

            const data = {
                searchItem: searchString
            }
            axios.put(`${import.meta.env.VITE_APP_MAIN_API}/user/${user}/add-search-item`, data, {
              headers: {
                authorization: `Bearer ${userToken}`,
              }
            })
              .then((res) => {
                console.log(res)
              }).catch(err => {
                // alert(err.response.data.error)
                console.log(err.response)
              })
          }

        chrome?.tabs?.create({ url: searchUrl });
    };

    return (
        <form onSubmit={handleSubmit} className='amzSearch'>
            <input placeholder='Search products..' className='amzSearch__input' type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <FiSearch className='amz__icon' onClick={handleSubmit}/>
        </form>
    )
}

export default AmzSearch