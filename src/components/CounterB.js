import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { ThemeContext } from './ComponentA'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case ('decrement'):
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case ('decrement2'):
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CounterB = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    const getData = () => {
      axios
        .get('typicode.jsonplaceholder.com/todos/1')
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response))
    }
    getData()
  }, [])

  return (
    <div>
      <h2>{count.firstCounter}</h2>
      <h2>{count.secondCounter}</h2>
      <div>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
      </div>
      <div>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch({ type: 'increment', value: 2 })}>Increment by 2</button>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch({ type: 'decrement', value: 2 })}>Decrement by 2</button>
      </div>
      <div>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment button2</button>
        <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement button2</button>
      </div>

      <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}
