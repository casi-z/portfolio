import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
//import equate from "./components/equate";
// setTimeout(() => {
//     equate()
// }, 0);
// window.onresize = equate()

function App() {
	function equate(params) {
		const elem = document.querySelectorAll('[data-height="width"]')
		elem.forEach(e => e.style.height = `${e.offsetWidth}px`)
		const elemSecond = document.querySelectorAll('[data-width="height"]')
		elemSecond.forEach(e => e.style.width = `${e.offsetHeight}px`)
	}
	setTimeout(() => {
		equate()

	}, 0);
	window.addEventListener('resize', () => equate())
	function equate(params) {
		const elem = document.querySelectorAll('[data-height="width"]')
		elem.forEach(e => e.style.height = `${e.offsetWidth}px`)
		const elemSecond = document.querySelectorAll('[data-width="height"]')
		elemSecond.forEach(e => e.style.width = `${e.offsetHeight}px`)
	}
	setTimeout(() => {
		equate()

	}, 0);
	window.addEventListener('resize', () => equate())
	return (
		<div className="wrapper">
			<Header />
			<Post />
		</div>
	);
}

export default App;
