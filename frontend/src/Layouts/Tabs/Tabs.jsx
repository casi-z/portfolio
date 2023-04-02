import { useContext, useState } from 'react'
import { PostContext } from '../../context'
import './Tabs.scss'
const { log } = console
function Tabs({ props }) {
    const [tabs, setTabs] = useState([
        { name: 'All', selected: true },
        { name: 'Frontend', selected: false },
        { name: 'Backend', selected: false },
        { name: 'Other', selected: false },
    ])
    let tabsCopy = [...tabs]

    function tabSelect(index) {
        tabsCopy.map(e => e.selected = false)
        tabsCopy[index].selected = true
        setTabs(tabsCopy)
    }

    function handleClick(tab, index) {
        tabSelect(index)
        props.postFilter(tabs)
    }
    return (<>
        <div className="Tabs">
            {tabs.map((tab, index) =>
                <div
                    key={index}
                    onClick={e => handleClick(tab, index)}
                    className={`Tabs__tab tab selected-${tab.selected}`}>
                    <div className="tab__name">
                        {tab.name}
                    </div>
                </div>

            )}
        </div>
    </>)
}
export default Tabs;
