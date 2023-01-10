import './Button.scss'
const {log} = console
function Button({props, style, onClick, children}) {
	return (
		<div style={style} onClick={onClick} className="Button">{children}</div>
	)
}
export default Button;
