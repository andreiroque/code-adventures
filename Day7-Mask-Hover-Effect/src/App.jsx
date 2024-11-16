import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [isHovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const size = isHovered ? 400 : 100;

  const handleMousePos = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePos);
    return () => {
      window.removeEventListener("mousemove", handleMousePos);
    };
  }, []);

  return (
    <div className="box flex items-center justify-center flex-col font-mono lg:text-7xl">
      <div
        className="h-screen flex items-center w-screen justify-center bg-zinc-800 mask text-slate-200"
        style={{
          WebkitMaskPosition: `${mousePos.x - size / 2}px ${
            mousePos.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
      >
        <h1
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          I want to be a billionaire!
        </h1>
      </div>
      <div className="h-screen flex items-center w-screen justify-center main">
        <h1>I'm Andrei Marvin B. Roque!</h1>
      </div>
    </div>
  );
};

export default App;
