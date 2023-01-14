import "./Header.scss"
import equate from "../../utils/equate";
import wordRandom from '../../utils/wordRandom'
import Logo from "../../components/Logo/Logo"
import Verify from '../../components/Icons/Verify/Verify'
import GeoLocation from "../../components/Icons/GeoLocation/GeoLocation";
import Calendar from "../../components/Icons/Calendar/Calendar"
import Link from "../../components/Icons/Link/Link";
import Tools from "../../components/Icons/Tools/Tools";
import Button from '../../components/Button/Button' 
import UserName from '../../components/UserName/UserName'
import Mail from "../../components/Icons/Mail/Mail";
import OrderButton from "../../components/OrderButton/OrderButton";
import { useEffect } from "react";
import { postList } from "../../data/PostList";
import Href from "../../components/Href/Href"
import { useState } from "react";
import LogoPopUp from "../../components/LogoPopUp/LogoPopUp";
import axios from "axios";
// eslint-disable-next-line
const { log } = console


setTimeout(() => {
	//equate()
}, 0);
//window.onresize = equate()
function Header({ props }) {

	const [views, setViews] = useState(0)

	async function getViews(params) {
		await axios.get('/api/watchers')
			.then(res => setViews(res.data.watchers))
		
	}
	useEffect(() => {
		getViews()
	}, [])
	const [isBigLogoVisible, setIsBigLogoVisible] = useState(false)
	return (
		<header className="header">
			<LogoPopUp props={{isBigLogoVisible, setIsBigLogoVisible}}/>
			<div className="header__row header__row_decor"/>
			<div className="header__row header__row_info">

				<Logo onClick={() => setIsBigLogoVisible(true)} />
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
							'Здесь есть мобильная версия, Карл!',
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
					<h3><span className="followers__number">{views}</span> Views</h3>
				</div>
			</div>
		</header>
	)
}
export default Header;