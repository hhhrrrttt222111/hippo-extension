import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";

function AmzSearch() {

    const [searchString, setSearchString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchUrl = `https://www.amazon.in/s?k=${searchString}`;
        // window.location.href = searchUrl;

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