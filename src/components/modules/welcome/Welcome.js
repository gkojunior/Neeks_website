import React from 'react'
import './welcome.css'
import BgVideo from '../../../assets/Bg2.mp4'

const Welcome = () => {
	return (
		<div className='welcomePage'>
			<video src={BgVideo} autoPlay muted loop className='video-bg' />
			<div className='bg-overlay'></div>
			<div className='home-text'>
				<h1>Welcome!</h1>
				<p>Hi! I'm Shaneka a Designer.</p>
				<div className='home-btn'>
					{' '}
					<a href='/creations'>Creactions</a>
				</div>
			</div>
			
		</div>
	)
}

export default Welcome
