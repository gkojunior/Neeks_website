import React from 'react'
import './welcome.css'
import BgVideo from '../../../assets/Bg2.mp4'
import { Link } from 'react-router-dom'

// Animation
// import Lottie from 'lottie-react'
// import animationData from '../../../assets/Animation - 1702164960699.json'
// import animationData from '../../../assets/Animation - 1702169449817.json'
// import animationData from '../../../assets/Animation - 1702170031344.json'

const Welcome = () => {
	return (
		<div className='welcomePage'>
			<video src={BgVideo} muted  className='video-bg' /> 

			<div className='home-text'>
				<h1>Welcome to Paradise!</h1>
				<Link to='/creations'><button className="homeButton">My Creaction!</button></Link>
			</div>
		</div>
	)
}

export default Welcome
