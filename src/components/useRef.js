import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from './useContext/ComponentA'

export const Ref = () => {
  const refContainer = useRef(null)
  const intervalRef = useRef()
  const [timer, setTimer] = useState(0)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    refContainer.current.focus()
    // seperate usecase for useRef hook
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])


  return (
    <div>
      <p>On page load the Input is placed on focus</p> <br />
      <input ref={refContainer} /><br />
      <small>Hook Timer Count {timer} </small> <br />
      <button
        style={{ background: theme.background, color: theme.color, padding: theme.padding }}
        onClick={() => clearInterval(intervalRef.current)}>
        Stop TImer
      </button>
    </div >
  )
}
