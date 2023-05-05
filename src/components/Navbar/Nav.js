import React from "react";
import "./Nav.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGreaterThan } from "react-icons/fa";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom"


function Navbar() {
  const [hideSidebar, setHideSideBar] = useState(true);
  const toggleChecked = () => setHideSideBar((value) => !value);
  return (

    < div >

      <div
        className={
          hideSidebar
            ? " w-10 fixed right-0 h-full"
            : "w-72 fixed right-0 h-full"
        }
      >
        {hideSidebar ? (
          <div className=" bg-black w-10  bg-opacity-80 h-full">
            <div className="sidebar cursor-pointer hover:text-lime-400 text-amber-500 ml-1 ">
              <GiHamburgerMenu size={30} onClick={toggleChecked} />
            </div>
            <ul className="  my-10 space-y-5 mx-10">
              <li className=" cursor-pointer"><Link to="/">Home</Link></li>
              <li className=" cursor-pointer">Job for Hire</li>
              <li className=" cursor-pointer">Marketplace</li>
              <li className=" cursor-pointer"><Link to="/casinolandpage">Casino</Link></li>
              <li className=" cursor-pointer">Play to EARN</li>
            </ul>
          </div>
        ) : (
          <div className="sidebar-active text-center bg-black bg-opacity-80 text-white h-full">
            <div className="ml-3 hover:text-lime-400 transition-all 0.5s ease-in cursor-pointer">
              <FaGreaterThan size={30} onClick={toggleChecked} />
            </div>
            <ul className="  my-10 space-y-5 mx-10 text-left">
              <li className=" cursor-pointer active:border-l-2 active:border-cyan-600"><Link to="/">Home</Link></li>
              <li className=" cursor-pointer">Job for Hire</li>
              <li className=" cursor-pointer active:border-l-2 active:border-cyan-600">Marketplace</li>
              <li className=" cursor-pointer active:active:border-cyan-600 active:border-l-2"><Link to="/casinolandpage">Casino</Link></li>
              <li className=" cursor-pointer">Play to EARN</li>
            </ul>
          </div>
        )}
      </div>
    </div >
  );
}

export { Navbar };
