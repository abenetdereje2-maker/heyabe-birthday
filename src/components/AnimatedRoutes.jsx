
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../pages/Home";
import Letter from "../pages/Letter";
import Memories from "../pages/Memories";
import Wishes from "../pages/Wishes";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/wishes" element={<Wishes />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
