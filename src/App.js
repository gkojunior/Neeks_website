import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/modules/contact/Contact'

import Footer from './components/modules/footer/Footer'
import Creations from './components/modules/creations/Creations'
import Navbar from './components/modules/navbar/Navbar'
import Home from './components/modules/home/Home'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/creations' element={<Creations />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
