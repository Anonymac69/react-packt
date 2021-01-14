import React, { useContext } from 'react'
import { UserContext, ZimmermanContext, ThemeContext } from './ComponentA'

const ComponentD = () => {

  const theme = useContext(ThemeContext)
  const user = useContext(UserContext)
  const zimmerman = useContext(ZimmermanContext)

  return (
    <div>
      <button style={{ background: theme.background, color: theme.color, fontFamily: theme.fontFamily, padding: theme.padding }}>Test useContext Hook</button>
      <br />
      {user} - using the useContext Hook <br />
      {zimmerman} - using the useContext Hook
    </div>
  )
}

export default ComponentD
