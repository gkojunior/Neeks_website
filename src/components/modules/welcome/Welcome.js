import React from 'react'
import './welcome.css'
import BgVideo from '../../../assets/Bg2.mp4'

const Welcome = () => {
	return (
		<div className='welcomePage'>
			<video src={BgVideo} muted  className='video-bg' />
			<div className='home-text'>
				<h1>Welcome to Paradise!</h1>
			</div>
		</div>
	)
}

export default Welcome
