import React, { useState } from 'react'
import './Navbar.css'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { pageLinks, socialLinks } from '../utils/data'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<nav className={toggle ? 'navbar expanded' : 'navbar'}>
			<h1 className='logo'>Shaneka Owusu</h1>
			<ul class='nav-icons'>
				{socialLinks.map((link) => {
					const { id, href, icon } = link
					return (
						<li key={id}>
							<a
								href={href}
								target='_blank'
								rel='noreferrer'
								className='nav-icons'
							>
								<i className={icon}></i>
							</a>
						</li>
					)
				})}
			</ul>
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
