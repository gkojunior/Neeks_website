import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa'
import { links } from '../utils/data'




const Navbar = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.nav_links}>
				{links.map((link) => {
					const { id, text, url } = link
					return (
						<li key={id}>
							<Link to={url}>{text}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Navbar
