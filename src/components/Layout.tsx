import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="app-container bg-gray-100 dark:bg-gray-900 h-screen/2 p-4 flex flex-col mx-auto ring-1 ring-gray-300 mt-10">
      <Navbar />
      <main>
        {/* AnimatePresence enables exit animations when components are removed from the tree */}
        <AnimatePresence mode="wait">
          {/* Use location.pathname as a key to trigger re-animation on route change */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }} //start invisible and slightly down
            animate={{ opacity: 1, y: 0 }} //fade in and move up
            exit={{ opacity: 0, y: -20 }} //fade out and move up
            transition={{ duration: 0.2 }} //animation speed
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
