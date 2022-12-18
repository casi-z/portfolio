import "./Header.scss"
import equate from "../../utils/equate";
import wordRandom from '../../utils/wordRandom'
import Logo from "../Logo/Logo";
import Verify from '../Icons/Verify/Verify'
import GeoLocation from "../Icons/GeoLocation/GeoLocation";
import Calendar from "../Icons/Calendar/Calendar"
import Link from "../Icons/Link/Link";
// eslint-disable-next-line
const { log } = console


setTimeout(() => {
	//equate()
}, 0);
//window.onresize = equate()
function Header({ props }) {
	return (
		<header className="header">
			<div className="header__row header__row_decor">

			</div>
			<div className="header__row header__row_info">

				<Logo />

				<h1>casi_z
					<Verify />
				</h1>
				<h2>@casiz</h2>


				<span>
					{
						wordRandom([

							'Знает как отцентровать div',
							'Grid или Flex?',
							'Закос под твиттер, зато не банально',
						])

					}
				</span>
				<div className="header__data data">
					<div className="data__row data__row_location">
						<GeoLocation />Noginsk
					</div>
					<a href="https://github.com/casi-z" className="data__row data__row_github">
						<Link />
						github.com
					</a>
					<div className="data__row data__row_reg-date">
						<Calendar />
						Join October 2021
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;