import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Techs } from "../pages/techs";
import { Projects } from "../pages/projects";

export const RouteApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home name="Leonardo Gomes" subtitle="Full Stack Developer" />
            }
          />
          <Route
            path="/about"
            element={
              <About
                aboutTextH1="About."
                aboutTextH3="I'm a Full Stack Developer based in cloudy São Paulo, Brazil."
                pText1="A lover for technology and in a constant quest for new challenges. My journey in web development began with HTML, CSS, and JavaScript, and since then, I have been honing my skills and knowledge in various technologies"
                pText2="Since 2022, I've enjoyed turning complex problems into simple solutions."
              />
            }
          />
          <Route path="/techs" element={<Techs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
};
