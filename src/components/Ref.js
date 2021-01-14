import React from 'react'
import { useEffect, useRef, useState } from 'react'

export const Ref = () => {
  const refContainer = useRef(null)
  const intervalRef = useRef()
  const [timer, setTimer] = useState(0)

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
      <button onClick={() => clearInterval(intervalRef.current)}>Stop TImer</button>
    </div>
  )
}
