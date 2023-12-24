import React from 'react'
import { useEffect, useState } from 'react'
import { creations } from '../utils/data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import '../creations/Creations.css'

const Creations = () => {
	// const [project, setProject] = useState(creations)
	const [currentPerson, setCurrentPerson] = useState(0)

	const prevSlide = () => {
		setCurrentPerson((oldPerson) => {
			const result = (oldPerson - 1 + creations.length) % creations.length
			return result
		})
	}
	const nextSlide = () => {
		setCurrentPerson((oldPerson) => {
			const result = (oldPerson + 1) % creations.length
			return result
		})
	}

	useEffect(() => {
		let sliderId = setInterval(() => {
			nextSlide()
		}, 5000)
		return () => {
			clearInterval(sliderId)
		}
	})
	return (
		<div className='creationsContainer'>
			<h2 className='title'>My creations</h2>
			<div className='underline'></div>
			<p className='creationText'>Hey scroll through some of my recent work. I would love to partner up and start creating someone!</p>
			<section className='slider-container'>
				{creations.map((project, index) => {
					const { id, image, title, subtitle } = project
					return (
						<article
							className='slide'
							style={{
								transform: `translateX(${100 * (index - currentPerson)}%)`,
							}}
							key={id}
						>
							<img src={image} alt={title} className='person-img' />
							<h5 className='name'>{title}</h5>
							<p className='text'>{subtitle}</p>
							<FaQuoteRight className='icon' />
						</article>
					)
				})}
				<button type='button' className='prev' onClick={prevSlide}>
					<FiChevronLeft />
				</button>
				<button type='button' className='next' onClick={nextSlide}>
					<FiChevronRight />
				</button>
			</section>
		</div>
	)
}

export default Creations
