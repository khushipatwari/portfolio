import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Nav_bar from './components/navbar/nav-bar'
import Mainsection from './components/main-section/mainsection'

function App() {

  return (
    <div className='website'>
    <Sidebar></Sidebar>
    <Mainsection></Mainsection>
    </div>
  )
}

export default App
