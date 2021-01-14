import React, { createContext } from 'react'
import ComponentB from './ComponentB'

const themes = {
  dark: {
    background: '#212121',
    color: '#fff',
    fontFamily: '"Fredericka the Great", cursive',
    padding: '1rem'
  },
  light: {
    background: 'none',
    border: '1px solid #e0e0e0',
    color: '#212121'
  }
}

export const ZimmermanContext = createContext()
export const UserContext = createContext()
export const ThemeContext = createContext(themes.dark)

const ComponentA = () => {
  return (
    <div>
      <UserContext.Provider value={'this is a ContextAPI setup example'}>
        <ZimmermanContext.Provider value={'the Zimmerman contextAPI setup'}>
          <ThemeContext.Provider value={themes.dark}>
            <ComponentB />
          </ThemeContext.Provider>
        </ZimmermanContext.Provider>
      </UserContext.Provider >

    </div>
  )
}

export default ComponentA
