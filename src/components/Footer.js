import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog, faHome } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <footer>
      <div>
        <FontAwesomeIcon icon={faHome} />
        <small>&copy; 2021</small>
        <FontAwesomeIcon icon={faCog} />
      </div>
    </footer>
  )
}
