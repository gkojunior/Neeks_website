import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../navbar/Navbar.css'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import DarkMode from '../DarkMode/DarkMode'
// import { pageLinks } from '../utils/data'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<nav className={toggle ? 'navbar expanded' : 'navbar'}>
			<h1 className='logo'>Shaneka Owusu</h1>
			<ul>
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
	)
}

export default Navbar
