import "./Header.scss"
import equate from "../../utils/equate";
import wordRandom from '../../utils/wordRandom'
import Logo from "../Logo/Logo";
import Verify from '../Icons/Verify/Verify'
import GeoLocation from "../Icons/GeoLocation/GeoLocation";
import Calendar from "../Icons/Calendar/Calendar"
import Link from "../Icons/Link/Link";
import Tools from "../Icons/Tools/Tools";
import Button from '../Button/Button' 
import UserName from '../UserName/UserName'
import Mail from "../Icons/Mail/Mail";
import OrderButton from "../OrderButton/OrderButton";
import { useEffect } from "react";
import { postList } from "../../data/PostList";
import Href from "../Href/Href"
// eslint-disable-next-line
const { log } = console


setTimeout(() => {
	//equate()
}, 0);
//window.onresize = equate()
function Header({ props }) {

	useEffect(() => {

	}, [])
	return (
		<header className="header">
			<div className="header__row header__row_decor">

			</div>
			<div className="header__row header__row_info">

				<Logo />
				<div className="header__buttons">
					<Button><Tools /></Button>
					<Button><Mail /></Button>
					<OrderButton>Order</OrderButton>
				</div>
				<h1>
					<UserName/>
				</h1>
				<Href/>


				<span className='header__splash'>
					{
						wordRandom([

							'Знает как отцентровать div',
							'Grid или Flex?',
							'Закос под твиттер, зато не банально',
						])
					}
				</span>
				<div className="hashTags">
					<a href="https://twitter.com/search?q=%23JavaScript&src=hashtag_click">#JavaScript  </a>
					<a href="https://twitter.com/search?q=%23React&src=hashtag_click">#React  </a>
					<a href="https://twitter.com/search?q=%23Node&src=hashtag_click">#Node  </a>
				</div>


				<div className="header__data data">
					<div className="data__row data__row_location">
						<GeoLocation />Noginsk
					</div>
					<a target="_blank" href="https://github.com/casi-z" className="data__row data__row_github">
						<Link />
						github.com
					</a>
					<div className="data__row data__row_reg-date">
						<Calendar />
						Join October 2021
					</div>
				</div>
				<div className="header__followers followers">
					<h3><span className="followers__number">{postList.length}</span> Projects</h3>
					<h3><span className="followers__number">784K</span> Views</h3>
				</div>
			</div>
		</header>
	)
}
export default Header;