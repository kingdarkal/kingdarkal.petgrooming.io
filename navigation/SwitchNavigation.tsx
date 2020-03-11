import React from 'react'
import GuestNavigation from './GuestNavigation'
import {BrowserRouter} from 'react-router-dom'

function SwitchNavigation() {
  return (
    <BrowserRouter>
      <GuestNavigation/>
    </BrowserRouter>

  )
}

export default SwitchNavigation