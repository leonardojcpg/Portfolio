import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from '../pages/home'

export const RouteApp = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
            </Routes>
        </Router>
        </>
    )
}