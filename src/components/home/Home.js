import React from 'react'
import Welcome from '../modules/welcome/Welcome'
import About from '../modules/about/About'
import Creactions from '../modules/creations/Creations'
import Contact from '../modules/contact/Contact'

import './home.css'

const Home = () => {
  return (
    <div className='container'>
      <Welcome />
      <About />
      <Creactions />
      <Contact />
    </div>
  )
}

export default Home
