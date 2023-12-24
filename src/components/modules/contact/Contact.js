import video from '../../../assets/Vid.mp4'
import '../contact/Contact.css'
const Contact = () => {
	return <section className='connect'>
	<video
		src={video}
		type='video/mp4'
		autoPlay
		muted
		loop
		className='video-container'
	/>
	<div className='video-banner'>
		<div className='section-title'>
			<h2>Get in touch</h2>
			<div className='underline'></div>
		</div>

		<p className='video-text'>
			For business inquiries and collaborations please contact me on any
			of my social websites. I am looking forward to hearing from you!
		</p>
		<a href='/contact' className='btn'>
			Email me!
		</a>
	</div>
</section>
}

export default Contact
