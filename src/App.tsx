import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Project } from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { backGroundColor } from "./styles";

function App() {
  return (
    <div
      style={{
        backgroundColor: backGroundColor,
        width: "100%",
        height: "100%",
      }}
    >
      <AnimatePresence>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/Portfolio/Home" element={<Home />}></Route>
            <Route path="/Portfolio/Projects" element={<Projects />}></Route>
            <Route path="/Portfolio/About" element={<About />}></Route>
            <Route path="/Portfolio/Contact" element={<Contact />}></Route>
            <Route
              path="/Portfolio/Projects/:ProjectName"
              element={<Project />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
