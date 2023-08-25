import React from 'react'
import './welcome.css'
import BgVideo from '../../../assets/Bg2.mp4'

const Welcome = () => {
	return (
		<div className='welcomePage'>
			<video src={BgVideo} autoPlay muted loop className='video-bg' />
			{/* <div className='bg-overlay'></div> */}
			<div className='home-text'>
				<h2>Welcome to Paradise!</h2>
				<div className='home-btn'>
					<a href='https://shaneka.netlify.app/creations'>Creations</a>
				</div>
			</div>
		</div>
	)
}

export default Welcome
