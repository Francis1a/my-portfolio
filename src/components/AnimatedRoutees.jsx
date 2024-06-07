import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Intropage from "../pages/Intropage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes
        location={location}
        key={location.pathname}
        path="/"
        element={<Intropage />}
      >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
