import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { MainContent } from './components/MainContent'
import './App.css'

function App() {

  return (
    <div>
    <Navbar />
    <MainContent />
    </div>
   
  )
}

export default App
