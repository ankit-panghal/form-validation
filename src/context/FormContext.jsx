
import React, { createContext,useReducer } from "react";

export const formContext = createContext();

const initialState = {
    name: '',
    email: '',
    password: '',
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_NAME' :{
            return {...state, name : action.payload}
        }
        case 'SET_EMAIL' :{
            return {...state, email : action.payload}
        }
        case 'SET_PASSWORD' :{
            return {...state, password : action.payload}
        }
       default: return state
    }
}
export const formContextProvider = ({ children }) => {
     const [formState,dispatch] = useReducer(reducer,initialState)

    return (
        <formContext.Provider value={{...formState,dispatch}}>
            {children}
        </formContext.Provider>
    )
}