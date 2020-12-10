import React from 'react'
import Custom from './components/custom'
import States from './components/states'
import Clock from './components/clock'
import './App.css';

const App = () => {

  return (
    <div className='container'>
      <Custom/>
      <States/>
      <Clock/>
    </div>
  )
}

export default App