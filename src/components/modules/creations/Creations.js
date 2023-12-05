import { useState } from 'react'
import { creations } from '../utils/data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Creations = () => {
    const [project, setProject] = useState(creations)
    
    const prevSlide = () => { }
    const nextSlide =()=>{}

	return (
		<section className='slider-container'>
			{project.map((project, index) => {
				const { id, image, title, subtitle } = project
				return (
                    <article className='slide' style={{transform:`translateX(${100 * index}%)`}}key={id}>
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
	)
}

export default Creations
