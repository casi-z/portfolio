import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from "./pages/Portfolio/Portfolio";
import axios from "axios";

const { log } = console

function App() {
	
	function equate(params) {
		const elem = document.querySelectorAll('[equate="width"]')
		elem.forEach(e => e.style.height = `${e.offsetWidth}px`)
		const elemSecond = document.querySelectorAll('[equate="height"]')
		elemSecond.forEach(e => e.style.width = `${e.offsetHeight}px`)
	}
	setTimeout(() => {
		equate()

	}, 0);
	window.addEventListener('resize', () => equate())

	const [scrollY, setScrollY] = useState(0);
	

	useEffect(() => {
		setScrollY(window.scrollY)
		localStorage.setItem('scrollY', scrollY)
	}, [window.scrollY]);
	
	useEffect(() => {
		window.scrollTo(0, localStorage.getItem('scrollY'))
	}, [])
	
	

	

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Portfolio props={{admin: false}}/>} />
				<Route path='/admin' element={<Portfolio props={{admin: true}}></Portfolio>} />
			</Routes>
		</BrowserRouter>
			
	);
}

export default App;
