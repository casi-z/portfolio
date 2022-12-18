import "./Header.scss"
import equate from "../../utils/equate";
import wordRandom from '../../utils/wordRandom'
import Logo from "../Logo/Logo";
const test = n => window.addEventListener('keydown',(e)=>{if(e.key==='Alt')alert(n);if(e.key==='Control')console.log(n)})
const {log} = console


setTimeout(() => {
    //equate()
}, 0);
//window.onresize = equate()
function Header({props}) {
    return(
       <header className="header">
            <div className="header__row header__row_decor">
                
            </div>
            <div className="header__row header__row_info">
        
                <Logo/>

                <h1>casi_z</h1>
                <h2>@casiz</h2>
                <span>{
                    wordRandom([

                        'Знает как отцентровать div', 
                        'Grid или Flex?', 
                        'Закос под твиттер, зато не банально',
                    ])
                
                }</span>
                <span>Я начинающий JavaScript (React) разработчик. Здесь лежит моё портфолио</span>
            </div>
       </header>
    )
}
export default Header;