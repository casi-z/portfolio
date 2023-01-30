import { useState } from 'react'
import TweeterButton from '../TweeterButton/TweeterButton'
import './Postform.scss'
const {log} = console
function Postform({ props, children }) {
	const [state, setState] = useState({
		isPopUpActive: false,
	})
   	return(
		<div className="Postform">
			<TweeterButton 
					  onClick={e => setState({ ...state, isPopUpActive: true })}
			>Tweet
			</TweeterButton>
			<div className={`Postform__popUp ${state.isPopUpActive ? '_active' : ''}`}></div>
		</div>
   )
}
export default Postform
