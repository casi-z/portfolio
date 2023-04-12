import './Logo.scss'
import { API_GIT_USER } from '../../api/constants';
import img from '../../img/logo.svg'
const { log } = console
function Logo({className, onClick, equate, props}) {
    return(
        <img
            src={img}
            onClick={onClick}
            equate={'width' || equate}
            className={className + " logo"}
        />
    )
}
export default Logo;