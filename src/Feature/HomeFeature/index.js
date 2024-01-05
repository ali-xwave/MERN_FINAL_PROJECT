import React from 'react'
import { Courses, Home, Navbar, Teachers } from '../../Components'

const HomeFeature = () => {
  const isAuthenticated = false;
  return (
    <div>
      <Home />
      <Courses />
      <Teachers />
    </div>
  )
}

export default HomeFeature
