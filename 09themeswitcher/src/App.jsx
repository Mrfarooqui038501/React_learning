import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'

function App() {
   const [themeMode, setThemeMode]  = useState("light")
   
   const lightTheme = () =>{
    setThemeMode('light')
   }
   const darkTheme = () =>{
    setThemeMode('dark')
   }

   // theme Changing 
   useEffect(() => {
      document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(themeMode)

   },[themeMode])

  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className='p-4 bg-gray-600 text-3xl'>Toggle Button</h1>
                                                        
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

            </ThemeProvider>
  )
}

export default App
