import React from 'react'
import ComponentD from './ComponentD'
import { UserContext, ZimmermanContext } from './ComponentA'

const ComponentC = () => {
  return (
    <div className='container-alt'>
      <>
        <small>Context APIs is a method used to directly pass down properties to deeply nested
        components without passing props through every parent container
        </small>
        <UserContext.Consumer>
          {
            user => {
              return (
                <ZimmermanContext.Consumer>
                  {zimmerman => {
                    return (
                      <ul>
                        <li> {user} - using the former contextAPI setup </li>
                        <li> {zimmerman} </li>
                      </ul>
                    )
                  }}
                </ZimmermanContext.Consumer>
              )
            }
          }
        </UserContext.Consumer>

        <br />
        <ComponentD />
      </>
    </div >
  )
}

export default ComponentC
