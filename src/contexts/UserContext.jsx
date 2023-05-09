import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

function UserContextProvider(props) {

    const [user, setUser] = useState(localStorage.getItem('userLocal'))
    const [userToken, setUserToken] = useState(localStorage.getItem('userTokenLocal'))

    console.log(localStorage.getItem('userLocal'))

    const updateUser = (u) => {
        setUser(u)
        localStorage.setItem("userLocal", u)
    }

    const updateUserToken = (t) => {
        setUserToken(t)
        localStorage.setItem("userTokenLocal", t)
    }

    const logoutUser = () => {
        localStorage.removeItem("userLocal")
        localStorage.removeItem("userTokenLocal")
        // window.location.reload()

        setUser('')
        setUserToken('')
    }

    useEffect(() => {
        localStorage.setItem("userTokenLocal", userToken);
        localStorage.setItem("userLocal", user);
    }, [userToken, user]);

    const value = { user, userToken, updateUser, updateUserToken, logoutUser }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;