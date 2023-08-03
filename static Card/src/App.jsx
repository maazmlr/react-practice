import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MainComponent } from './components/MainContent'
import {Footer} from './components/footer'
import { Head } from './components/Head'

import './App.css'

function App() {

  return (
    <div>
            <Head />

      <MainComponent />
      <Footer />
    </div>
   
  )
}

export default App
