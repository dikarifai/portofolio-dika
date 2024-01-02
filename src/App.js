import { Route, Routes } from "react-router-dom";
import "./App.css";
import PortofolioLayout from "./Layout/PortofolioLayout";
import Home from "./screens/Home";
import About from "./screens/About";
import Experience from "./screens/Experience";
import Education from "./screens/Education";
import Skills from "./screens/Skills";
import Certification from "./screens/Certification";
import Portofolio from "./screens/Portofolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortofolioLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Certification" element={<Certification />} />
      </Route>
    </Routes>
  );
}

export default App;
