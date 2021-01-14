import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  data: {},
  isLoading: true,
  isError: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        data: action.payload,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        data: {},
        isError: 'Oops! Something went wrong!'
      }
    default:
      return state
  }
}

export const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/50')
        .then(res => {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        })
        .catch(err => {
          dispatch({ type: 'FETCH_ERROR' })
        })
    }

    fetchData()
  }, [])

  return (
    <div>
      {state.isLoading ? <div>Loading...</div> : <p>{state.data.title}</p>}
      {state.isError ? <div>{state.isError}</div> : null}
    </div>
  )
}
