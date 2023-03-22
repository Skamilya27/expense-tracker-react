import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [IdToken, setIdToken] = useState(null);

    useEffect(() => {
        setIdToken(localStorage.getItem("idToken"));
    }, [])

    return (
        <AuthContext.Provider value={{IdToken, setIdToken,isLogin, setIsLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;