import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about/index.jsx";
import { Techs } from "../pages/techs";
import { Projects } from "../pages/projects";
import { Contact } from "../pages/contact";

export const RouteApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techs" element={<Techs />} />
          <Route
            path="/projects"
            element={
              <Projects
                title="Contact."
                subtitle="Get in touch with me via social media or email."
                cardsLink="Visit repository here!"
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
