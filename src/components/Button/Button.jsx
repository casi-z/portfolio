import './Button.scss'
const {log} = console
function Button({props, children}) {
	return (
		<div className="Button">{children}</div>
	)
}
export default Button;
