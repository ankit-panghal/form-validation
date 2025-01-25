import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { themeContext } from '../context/ThemeContext'

const ThemeComp = () => {
    const {theme,dispatch} = React.useContext(themeContext)

  return (
    <div className='absolute top-4 right-8 cursor-pointer' onClick={() => dispatch({type: 'TOGGLE'})}>
       { 
         theme === 'LIGHT' ? <DarkMode />
         :
         <LightMode/>   
    }
    </div>
  )
}

export default ThemeComp