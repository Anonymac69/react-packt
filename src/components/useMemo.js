import React from 'react'
import { useContext, useMemo, useState } from 'react'
import { ThemeContext } from './useContext/ComponentA'

export const Memo = () => {
  const theme = useContext(ThemeContext)
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const incrementOne = () => {
    setCountOne(countOne + 1)
  }

  const incrementTwo = () => {
    setCountTwo(countTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return countOne % 2 == 0
  }, [countOne])


  return (
    <div>
      <div>
        <button
          style={{ background: theme.background, color: theme.color, padding: theme.padding }}
          onClick={incrementOne}>
          Count One  {countOne}
        </button>
        <span> {isEven ? 'is an Even number' : 'is an Odd number'} </span>
      </div>
      <div>
        <button
          style={{ background: theme.background, color: theme.color, padding: theme.padding }}
          onClick={incrementTwo}>
          Count Two  {countTwo}
        </button>
      </div>
    </div>
  )
}
