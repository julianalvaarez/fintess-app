import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navegador() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header>
      <nav>
        <div className="hidden md:flex fixed w-screen -top-0 z-30 justify-between bg-green-600 p-4">
          <h3 className="self-center font-semibold text-xl sm:font-bold sm:text-3xl text-white font-mono">
            <Link to="/">FITNESS APP</Link>
          </h3>
          <ul className="flex items-center font-semibold text-xl mr-10 text-white">
            <li className="mr-3 hover:underline">
              <Link to="/routine">Routine</Link>
            </li>
            <li className="hover:underline">
              <Link to="/favorite">Favorites</Link>
            </li>
          </ul>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden bg-green-400 p-4 text-white">
          <div className="flex justify-between items-center mx-2">
            <span className="font-bold text-xl">
              <NavLink to="/">FITNESS APP</NavLink>
            </span>
            <span onClick={() => setNavActive(!navActive)} className="text-2xl">
              <FaBars />
            </span>
          </div>

          {navActive && (
            <ul className="flex flex-col items-end menu-horizontal font-semibold text-lg underline my-4">
              <li className="mb-3 w-screen text-end">
                <NavLink to="/routine">Routine</NavLink>
              </li>
              <li>
                <NavLink to="/favorite">Favorites</NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
