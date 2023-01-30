import './TweeterButton.scss'
const {log} = console
function TweeterButton(props) {
	return (
		<div className="TweeterButton" {...props}>
			{props.children}
		</div>
	)
}

export default TweeterButton;
