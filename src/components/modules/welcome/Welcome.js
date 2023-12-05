import React from 'react'
import './welcome.css'
import BgVideo from '../../../assets/Bg2.mp4'
import { Link } from 'react-router-dom'

const Welcome = () => {
	return (
		<div className='welcomePage'>
			<video src={BgVideo}  muted loop className='video-bg' />
			<div className='home-text'>
				<h1>Welcome to Paradise!</h1>
				<div className='home-btn'>
				<Link to='/creations'>Creations</Link>
				</div>
			</div>
			
		</div>
	)
}

export default Welcome
