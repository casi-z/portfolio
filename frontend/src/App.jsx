import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from "./pages/Portfolio/Portfolio"
import equateProperties from './utils/equateProperties';
const { log } = console

function App() {

    
    window.addEventListener('resize', () => equateProperties())

    useEffect(() => {
        equateProperties()
    }, [])


    return (

        <Portfolio />

    )
}

export default App;
