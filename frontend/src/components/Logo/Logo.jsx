import './Logo.scss'
const test = n => window.addEventListener('keydown',(e)=>{if(e.key==='Alt')alert(n);if(e.key==='Control')console.log(n)})
const {log} = console
function Logo({className, onClick, equate, props}) {
    return(
        <div onClick={onClick} equate={'width' || equate} className={className + " logo"}></div>
    )
}
export default Logo;