import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-zinc-900">
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="bg-slate-800 p-20 rounded-lg font-mono text-gray-300 mdiv"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-3xl">Hello World!</h1>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        type="button"
        className="px-20 py-10 bg-green-600 rounded-full text-gray-300 btn text-xl"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default App;
