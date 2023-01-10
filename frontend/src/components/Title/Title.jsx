import { useState } from 'react'
import { useEffect } from 'react'
import './Title.scss'
const { log } = console
function Title({ props }) {

	const [title, setTitle] = useState(<></>)

	function titleAppend() {

		const titleTarget = document.querySelectorAll('[data-title]')

		titleTarget.forEach(elem => {
			elem.addEventListener('mouseover', (e) => {
				const coords = e.currentTarget.getBoundingClientRect()
				setTitle(
					<div
						className="Title"
						style={{
							position: 'fixed',
							top: `${coords.y + coords.height}px`,
							left: `${coords.x}px`,
						}}

					>
						{e.currentTarget.getAttribute('data-title')}
					</div>
				)
			})
			elem.addEventListener('mouseout', (e) => { 
				setTitle(<></>)
			})
		})
	}

	useEffect(() => {
		titleAppend()
	})

	return title
}
export default Title;
