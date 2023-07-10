import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/modules/about/About'
import Contact from './components/modules/contact/Contact'

import Footer from "./components/modules/footer/Footer"
import Work from './components/modules/creations/Creations'

import Navbar from "./components/modules/navbar/Navbar"

function App() {
	return (
    <Router>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Work />} />
				<Route path='/about' exact element={<About />} />
				<Route path='/contact' exact element={<Contact/>} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
