import { useEffect } from 'react';
import './AppLoader.scss'
function AppLoader(params) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])
    return (
        <div className="AppLoader">

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="125px" height="124px" style={{ "shapeRendering": "geometricPrecision", " textRendering": "geometricPrecision", " imageRendering": "optimizeQuality", " fillRule": "evenodd", "clipRule": "evenodd" }} xlink="http://www.w3.org/1999/xlink">
                {/* <g><path style={{ "opacity": 1 }} fill="#212831" d="M 53.5,-0.5 C 59.1667,-0.5 64.8333,-0.5 70.5,-0.5C 101.988,6.31992 119.988,25.6533 124.5,57.5C 124.5,60.1667 124.5,62.8333 124.5,65.5C 119.988,97.3467 101.988,116.68 70.5,123.5C 64.8333,123.5 59.1667,123.5 53.5,123.5C 22.0121,116.68 4.01209,97.3467 -0.5,65.5C -0.5,62.8333 -0.5,60.1667 -0.5,57.5C 4.01209,25.6533 22.0121,6.31992 53.5,-0.5 Z" /></g> */}
                <g><path style={{ "opacity": 1 }} fill="#07a3bd" d="M 31.5,48.5 C 35.8333,48.5 40.1667,48.5 44.5,48.5C 44.5,50.5 44.5,52.5 44.5,54.5C 42.8333,54.5 41.1667,54.5 39.5,54.5C 39.5,62.8333 39.5,71.1667 39.5,79.5C 41.1667,79.5 42.8333,79.5 44.5,79.5C 44.5,81.5 44.5,83.5 44.5,85.5C 40.1667,85.5 35.8333,85.5 31.5,85.5C 31.5,73.1667 31.5,60.8333 31.5,48.5 Z" /></g>
                <g><path style={{ "opacity": 1 }} fill="#05a4be" d="M 79.5,48.5 C 83.5,48.5 87.5,48.5 91.5,48.5C 91.5,60.8333 91.5,73.1667 91.5,85.5C 87.5,85.5 83.5,85.5 79.5,85.5C 79.5,83.5 79.5,81.5 79.5,79.5C 80.8333,79.5 82.1667,79.5 83.5,79.5C 83.5,71.1667 83.5,62.8333 83.5,54.5C 82.1667,54.5 80.8333,54.5 79.5,54.5C 79.5,52.5 79.5,50.5 79.5,48.5 Z" /></g>
                <g><path style={{ "opacity": 1 }} fill="#ebedea" d="M 48.5,67.5 C 50.1667,67.5 51.8333,67.5 53.5,67.5C 53.5,68.8333 53.5,70.1667 53.5,71.5C 51.8333,71.5 50.1667,71.5 48.5,71.5C 48.5,70.1667 48.5,68.8333 48.5,67.5 Z" /></g>
                <g><path style={{ "opacity": 1 }} fill="#ebedea" d="M 59.5,67.5 C 61.1667,67.5 62.8333,67.5 64.5,67.5C 64.5,68.8333 64.5,70.1667 64.5,71.5C 62.8333,71.5 61.1667,71.5 59.5,71.5C 59.5,70.1667 59.5,68.8333 59.5,67.5 Z" /></g>
                <g><path style={{ "opacity": 1 }} fill="#e3ecec" d="M 70.5,67.5 C 72.1667,67.5 73.8333,67.5 75.5,67.5C 75.5,68.8333 75.5,70.1667 75.5,71.5C 73.8333,71.5 72.1667,71.5 70.5,71.5C 70.5,70.1667 70.5,68.8333 70.5,67.5 Z" /></g>
            </svg>

        </div>
    )
}
export default AppLoader;