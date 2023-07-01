import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Route = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route exact path='/' />
            </Routes>
        </Router>
        </>
    )
}