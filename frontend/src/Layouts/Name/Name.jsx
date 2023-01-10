import './Name.scss'
import UserName from '../../components/UserName/UserName'
import Button from '../../components/Button/Button'
import ArrowLeft from '../../components/Icons/ArrowLeft/ArrowLeft'
import { useState } from 'react'
const { log } = console
let rotateDeg = 0
function Name({ props }) {
	
	const [arrowRotate, setArrowRotate] = useState(0)
    return(
		<div className="Name">
			<div className="Name__blur"></div>
			<div className="Name__content">
				<Button style={{transform: `rotate(${arrowRotate}deg)`}} onClick={e => setArrowRotate(arrowRotate + 180)}><ArrowLeft /></Button>
				<UserName />
			</div>
		</div>
    )
}
export default Name;
