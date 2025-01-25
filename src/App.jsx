import React, { useContext, useEffect } from 'react'
import FormComp from './components/FormComp'
import ThemeComp from './components/ThemeComp'
import { themeContext } from './context/ThemeContext'

const App = () => {
 const {theme} = useContext(themeContext)


 useEffect(() => {
    if(theme === 'DARK') {
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
 },[theme])
  return (<>
            <ThemeComp/>
            <div className='flex justify-center h-screen dark:bg-zinc-800'>
              <FormComp/>
            </div>
    </>
  )
}

export default App