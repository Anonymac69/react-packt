import React, { useContext, useReducer } from 'react'
import { ThemeContext } from './ComponentA'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CounterC = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch('increment')}>Increment</button>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch('decrement')}>Decrement</button>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch('reset')}>Reset</button>
      </div>

      <div>
        <h2>{count2}</h2>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch2('increment')}>Increment</button>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch2('decrement')}>Decrement</button>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch2('reset')}>Reset</button>
      </div>
    </div>
  )
}
