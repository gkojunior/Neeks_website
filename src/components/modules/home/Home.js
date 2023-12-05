import React from 'react'
import Creations from '../creations/Creations'
import Welcome from '../welcome/Welcome'
import './home.css'

const Home = () => {
  return (
    <div className='container'>
      <Welcome />
      <Creations />
    </div>
  )
}

export default Home
