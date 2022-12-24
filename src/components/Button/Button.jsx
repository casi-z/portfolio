import './Button.scss'
const {log} = console
function Button({props, onClick, children}) {
	return (
		<div onClick={onClick} className="Button">{children}</div>
	)
}
export default Button;
