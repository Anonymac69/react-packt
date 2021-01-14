import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ComponentA from './ComponentA';
import { CounterA } from './CounterA';
import { CounterB } from './CounterB';
import { CounterC } from './CounterC';
import { DataFetching } from './DataFetching';
import { Memo } from './Memo'
import { Ref } from './Ref'


export const Nav = () => {
  return (
    <Router>
      <nav>
        <div>
          <h3>Project Zimmerman</h3>

          <ul>
            <small><Link className='link' to='/dataFetching'>dataFetching</Link></small>
            <small><Link className='link' to='/useContext'>useContext</Link></small>
            <small><Link className='link' to='/useMemo'>useMemo</Link></small>
            <small><Link className='link' to='/useRef'>useRef</Link></small>
            <small><Link className='link' to='/useReducer'>useReducer</Link></small>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path='/useMemo'>
          <Memo />
        </Route>
        <Route path='/useContext'>
          <ComponentA />
        </Route>
        <Route path='/useReducer'>
          <CounterC />
        </Route>
        <Route path='/useRef'>
          <Ref />
        </Route>
        <Route path='/dataFetch'>
          <DataFetching />
        </Route>
      </Switch>
    </Router>
  )
}
