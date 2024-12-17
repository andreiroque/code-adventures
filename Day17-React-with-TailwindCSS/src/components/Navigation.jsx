import React, { useState } from "react";
import "boxicons";
import Menu from "./Menu";
import logo from "../assets/react.svg";

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="h-44 bg-slate-700 text-slate-50 flex items-center justify-center w-screen">
      <div className="flex justify-between items-center w-4/5">
        {/* Logo */}
        <div className="image">
          <img src={logo} alt="React Logo" className="w-16 md:w-32 lg:48" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <box-icon
            name={clicked ? "x" : "menu"}
            color="white"
            onClick={() => setClicked(!clicked)}
          ></box-icon>
        </div>

        {/* Mobile Menu */}
        {clicked && (
          <div className="absolute top-24 left-0 w-full bg-slate-800 text-white flex justify-center">
            <Menu className="flex flex-col items-center gap-4 p-4" />
          </div>
        )}

        {/* Desktop Menu */}
        <Menu className="hidden md:flex gap-5" />
      </div>
    </header>
  );
};

export default Navigation;
