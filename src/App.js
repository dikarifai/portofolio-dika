import { Route, Routes } from "react-router-dom";
import "./App.css";
import PortofolioLayout from "./Layout/PortofolioLayout";
import Home from "./screens/Home";
import About from "./screens/About";
import Experience from "./screens/Experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortofolioLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Route>
    </Routes>
  );
}

export default App;
