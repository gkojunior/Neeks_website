import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/modules/about/About'
import Contact from './components/modules/contact/Contact'

import Footer from './components/modules/footer/Footer'
import Home from './components/modules/home/Home'
import Navbar from './components/modules/navbar/Navbar'
import Welcome from './components/modules/welcome/Welcome'

function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Navbar />
			</div>
			<Routes>
			<Route path='/' exact element={<Welcome />} />
				<Route path='/creations' exact element={<Home />} />
				<Route path='/about' exact element={<About />} />
				<Route path='/contact' exact element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
