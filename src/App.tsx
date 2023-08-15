import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Project } from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <AnimatePresence>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Projects/:ProjectName" element={<Project />}></Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
