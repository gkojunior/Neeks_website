import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../navbar/Navbar.css'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import DarkMode from '../DarkMode/DarkMode'
//Animation

import turtle from '../../../assets/turtle.svg'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<section className='navContainer'>
			<nav className={toggle ? 'navbar expanded' : 'navbar'}>
				<div className='iconContainer'>
					<h1 className='logo'>Shaneka Owusu</h1>
					<img src={turtle} alt='icon' className='turtle' />
				</div>

				<ul className='links'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/creations'>Creations</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
				<div className='darkmode'>
					<DarkMode />
				</div>

				<div className='toogle' onClick={handleToggle}>
					{toggle ? <FaTimes /> : <HiMenuAlt3 />}
				</div>
			</nav>
		</section>
	)
}

export default Navbar
