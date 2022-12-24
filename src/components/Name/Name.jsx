import './Name.scss'
import UserName from '../UserName/UserName'
import Button from '../Button/Button'
import ArrowLeft from '../Icons/ArrowLeft/ArrowLeft'
const { log } = console
const rotateDeg = 0
function Name({ props }) {
	function arrowRotate(e) {
		rotateDeg += 180
		e.currentTarget.style.transform = `rotate(${rotateDeg}deg)`
		
	}
    return(
		<div className="Name">
			<div className="Name__blur"></div>
			<div className="Name__content">
				<Button onClick={e => arrowRotate(e)}><ArrowLeft /></Button>
				<UserName />
			</div>
			
			
		</div>
    )
}
export default Name;
