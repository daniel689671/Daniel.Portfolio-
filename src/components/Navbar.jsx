import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 flex flex-row items-center rounded-lg font-medium transition-all duration-200
     ${
       isActive
         ? "text-green-600 bg-green-100"
         : "text-white hover:text-green-600 hover:bg-green-50"
     }`;

  return (
    <header className="w-full text-white">
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex text-white items-center pt-4 gap-[950px]">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="truncate font-bold max-w-[140px] md:max-w-none">
              DANIEL BANKZ.
            </span>
          </NavLink>

          {/* Desktop Links */}
          {/* <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/tracking" className={linkClass}>
              Track Parcel
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          
          </div> */}

          {/* Actions */}

          <NavLink to="/project-work" className={linkClass}>
            About me
          </NavLink>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-black text-white shadow-md px-6 py-6">
            <NavLink
              to="/project-work"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              About Me
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
