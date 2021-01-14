import React, { createContext } from 'react'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import './App.css';

const App = () => {

  return (
    <div className='container'>
      <Nav />
      <Footer />
    </div >
  )
}

export default App