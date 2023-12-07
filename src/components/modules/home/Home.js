import React from 'react'
import Contact from '../contact/Contact'
import Creations from '../creations/Creations'
import Welcome from '../welcome/Welcome'
import './home.css'

const Home = () => {
  return (
    <div>
      <Welcome />
      <Creations />
      <Contact/>
    </div>
  )
}

export default Home
