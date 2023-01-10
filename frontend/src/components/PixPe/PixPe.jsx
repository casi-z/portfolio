import { useState } from 'react';
import './PixPe.scss'
const { log } = console
function PixPe({ props }) {
	const [isDisplay, SetIsDisplay] = useState(false)
	function keyDown(key) {
		switch (key) {
			case 'Shift':
				//SetIsDisplay(true)
			case 'Alt':
				SetIsDisplay(prevState => !prevState)

		}
	}
	window.addEventListener('keydown', e => keyDown(e.key))
	return (<>
		<div
			style={{ display: isDisplay ? 'block' : 'none', zIndex: (9999999999) }}
			className="PixPe"
		></div>
	</>)
}
export default PixPe;
