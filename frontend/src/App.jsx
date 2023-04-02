import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from "./pages/Portfolio/Portfolio";
const { log } = console

function App() {
	
	function equate(params) {
		const elem = document.querySelectorAll('[equate="width"]')
		elem.forEach(e => e.style.height = `${e.offsetWidth}px`)
		const elemSecond = document.querySelectorAll('[equate="height"]')
		elemSecond.forEach(e => e.style.width = `${e.offsetHeight}px`)
	}
	window.addEventListener('resize', () => equate())

	useEffect(() => {
		equate()
    }, [])
    
    
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Portfolio props={{admin: false}}/>} />
				{/* <Route path='/admin' element={
					<Portfolio props={{ admin: true }}>
					
					</Portfolio>
				} /> */}
			</Routes>
		</BrowserRouter>
			
	);
}

export default App;
