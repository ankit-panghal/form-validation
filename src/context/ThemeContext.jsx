import React, {createContext} from 'react'

export const themeContext = createContext()

const initialState = 'LIGHT'

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
        return state === 'LIGHT' ? 'DARK' : 'LIGHT'
        default:
        return state
    }
}

export const ThemeContextProvider = ({children}) => {
    const [theme, dispatch] = React.useReducer(reducer, initialState)

    return (
        <themeContext.Provider value={{theme, dispatch}}>
            {children}
        </themeContext.Provider>
    )
}