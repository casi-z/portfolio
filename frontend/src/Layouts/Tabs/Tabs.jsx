import { useState } from 'react'
import './Tabs.scss'
const {log} = console
function Tabs({ props }) {
	const [tabs, setTabs] = useState([
		{ name: 'All', selected: true },
		{ name: 'Frontend', selected: false },
		{ name: 'Backend', selected: false },
		{ name: 'Other', selected: false },
	])
	let tabsCopy = [...tabs]
	let postsCopy = [...props.posts]
	
	function tabSelect(index) {
		tabsCopy.map(e => e.selected = false)
		tabsCopy[index].selected = true
		setTabs(tabsCopy)
	}

	function handleClick(tab, index) {
		tabSelect(index)
		props.setPosts([])
		props.setState({ ...props.state, loadedPostsLength: 0 })
		props.fetchPosts(0)
	}

    return(<>
		<div className="Tabs">
			{tabs.map((tab, index) => {
				return <div
							onClick={e => handleClick(tab, index)}
							className={`Tabs__tab tab selected-${tab.selected}`}>
							<div className="tab__name">
								{tab.name}
							</div>
						</div>

			})}
		</div>
    </>)
}
export default Tabs;
