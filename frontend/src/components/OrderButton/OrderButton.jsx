import './OrderButton.scss'
const {log} = console
function OrderButton({props, children}) {
	return (
		<div className="OrderButton">
			{children}
		</div>
	)
}
export default OrderButton;
