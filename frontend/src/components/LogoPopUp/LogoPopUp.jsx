import Logo from '../Logo/Logo';
import './LogoPopUp.scss'
const {log} = console
function LogoPopUp({ props }) {
	document.body.style.overflow = props.isBigLogoVisible ? 'hidden' : 'auto'
    return(<>
		<div style={{ display: props.isBigLogoVisible ? 'flex' : 'none' }}
			className="LogoPopUp">
			<div onClick={() => props.setIsBigLogoVisible(false)} className="LogoPopUp__closeButton">
				<svg viewBox="0 0 24 24" aria-hidden="true" className="r-jwli3a r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
			</div>
			<Logo equate={'height'} />
		</div>
    </>)
}
export default LogoPopUp;
