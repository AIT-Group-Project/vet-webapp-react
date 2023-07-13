import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    userProfile: false
}

export const ContextProvider = ({ children }) => {

    {/* Login.jsx */}
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    {/* Register.jsx */}
    const [registerFirstName, setRegisterFirstName] = useState('');
    const [registerLastName, setRegisterLastName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');


    return (
        <StateContext.Provider value={{loginEmail, setLoginEmail, loginPassword, setLoginPassword, registerFirstName, setRegisterFirstName, registerLastName, setRegisterLastName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);