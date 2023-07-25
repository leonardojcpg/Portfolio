import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";

export const RouteApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home name='Leonardo Gomes' subtitle='Full Stack Developer' />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
