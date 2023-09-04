import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TextContextProvider from './components/Context/TextContextProvider'
import ThemeContexProvider from './components/Context/ThemeContext'
import Grandpa from './components/TextContextProvider;/Grandpa'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import DivDynamic from './components/DivDynamic/DivDynamic'



function App() {

  return (
    <>
      <TextContextProvider>
        <Grandpa />
      </TextContextProvider>
      <ThemeContexProvider>
      <ThemeSwitcher />
      <DivDynamic titel='amit' text='bla bla bla'/>
      </ThemeContexProvider>
    </>
  )
}

export default App
