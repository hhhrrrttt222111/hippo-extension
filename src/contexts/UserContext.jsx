import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

function UserContextProvider(props) {

    const [user, setUser] = useState(localStorage.getItem('userLocal'))
    const [userToken, setUserToken] = useState(localStorage.getItem('userTokenLocal'))
    const [userName, setUserName] = useState(localStorage.getItem('userNameLocal'))

    console.log(localStorage.getItem('userLocal'))

    const updateUser = (u) => {
        setUser(u)
        localStorage.setItem("userLocal", u)
    }

    const updateUserToken = (t) => {
        setUserToken(t)
        localStorage.setItem("userTokenLocal", t)
    }
    const updateUserName = (t) => {
        setUserName(t)
        localStorage.setItem("userNameLocal", t)
    }

    const logoutUser = () => {
        localStorage.removeItem("userLocal")
        localStorage.removeItem("userNameLocal")
        // window.location.reload()

        setUser('')
        setUserName('')
    }

    useEffect(() => {
        localStorage.setItem("userNameLocal", userName);
        localStorage.setItem("userLocal", user);
    }, [userName, user]);

    const value = { user, userName, userToken, updateUser, updateUserName, updateUserToken, logoutUser }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;