import React, { useState } from 'react'
import '../navbar/Navbar.css'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { pageLinks } from '../utils/data'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<nav className={toggle ? 'navbar expanded' : 'navbar'}>
			<h1 className='logo'>Shaneka Owusu</h1>
	
			<ul className='links'>
				{pageLinks.map((link) => {
					return (
						<li key={link.id}>
							<a href={link.href} className='nav-link'>
								{link.text}
							</a>
						</li>
					)
				})}
			</ul>
			
			<div className='toogle' onClick={handleToggle}>
				{toggle ? <FaTimes /> : <HiMenuAlt3 />}
			</div>
		</nav>
	)
}

export default Navbar