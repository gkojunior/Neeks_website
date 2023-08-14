import './Creations.css'
import project1 from '../../../assets/p1.jpeg'
import project2 from '../../../assets/p2.jpeg'
import project3 from '../../../assets/p3.jpeg'
import project4 from '../../../assets/p4.jpeg'
// import project5 from '../../../assets/p5.jpeg'
// import project6 from '../../../assets/p6.jpeg'
// import { creations } from '../utils/data'
import Work from '../slider/Work'


const Creations = () => {
	return (
		<section className='section'>
			
			{/* <ul>
				{creations.map((link) => {
					const { id, image } = link
					return (
						<a href='/' class='project-4'>
							<article class='project'>
								<img src={project1} alt='single project' class='project-img' />
							</article>
						</a>
					)
				})}
            </ul> */}
            <Work />
			<div class='section-title'>
				<h2>My Creations</h2>
				<div class='underline'></div>
				<p class='projects-text'>These are some of my work!</p>
			</div>
			<div class='section-center projects-center'>
				<a href='/' class='project-1'>
					<article class='project'>
						<img src={project3} alt='single project' class='project-img' />
					</article>
				</a>
				<a href='/' class='project-2'>
					<article class='project'>
						<img src={project1} alt='single project' class='project-img' />
					</article>
				</a>
				<a href='/' class='project-3'>
					<article class='project'>
						<img src={project2} alt='single project' class='project-img' />
					</article>
				</a>
				<a href='/' class='project-4'>
					<article class='project'>
						<img src={project4} alt='single project' class='project-img' />
					</article>
				</a>

				{/* <a href='/' class='project-5'>
					<article class='project'>
						<img src={project5} alt='single project' class='project-img' />
					</article>
				</a> */}
			</div>
		</section>
	)
}

export default Creations
