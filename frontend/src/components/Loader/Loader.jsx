import './Loader.scss'
import img from '../../img/loading.svg'
const { log } = console
function Loader(props) {
    return (
        <div className="Loader">
            <svg
                height="32"
                viewBox="0 0 32 32"
                width="32"
            >
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="14"
                    strokeWidth="4"
                    style={{
                        "stroke": "rgb(29, 155, 240)",
                        opacity: 0.2,
                    }}
                >
                </circle>
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="14"
                    strokeWidth="4"
                    style={{
                        'stroke': 'rgb(29, 155, 240)',
                        'strokeDasharray': 80,
                        'strokeDashoffset': 60
                    }}>
                </circle>
            </svg>
        </div>

    )
}
export default Loader