import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.container}>
			<h4>
				&copy; {new Date().getFullYear()}
				<span> Shaneka Owusu</span> All rights reserved
			</h4>
		</div>
	)
}

export default Footer
