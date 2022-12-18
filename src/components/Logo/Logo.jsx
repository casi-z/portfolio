import './Logo.scss'
const test = n => window.addEventListener('keydown',(e)=>{if(e.key==='Alt')alert(n);if(e.key==='Control')console.log(n)})
const {log} = console
function Logo({className, props}) {
    return(
        <div  className={className + " logo"}></div>
    )
}
export default Logo;