import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
	return (
		<footer className='footer'>
			<ul className='footer-links'>
				<li>
					<a href='#home' className='footer-link'>
						home
					</a>
        </li>
				<li>
					<a href='#about' className='footer-link'>
						creations
					</a>
				</li>
				<li>
					<a href='#services' className='footer-link'>
						about
					</a>
				</li>
				<li>
					<a href='#featured' className='footer-link'>
						contact
					</a>
				</li>
			</ul>
			<ul className='footer-icons'>
				<li>
					<a
						href='https://www.twitter.com'
						target='_blank'
						className='footer-icon'
					>
						<AiFillFacebook />
					</a>
				</li>
				<li>
					<a
						href='https://www.twitter.com'
						target='_blank'
						className='footer-icon'
					>
						<FaTwitter />
					</a>
				</li>
				<li>
					<a
						href='https://www.twitter.com'
						target='_blank'
						className='footer-icon'
					>
            <AiFillInstagram />
          </a>
				</li>
			</ul>
			<h5 className='copyright'>
				copyright &copy; Shaneka Owusu
				<span id='date'></span> all rights reserved
			</h5>
		</footer>
	)
}

export default Footer
