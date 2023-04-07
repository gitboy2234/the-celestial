import React from "react";
import "./Nav.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGreaterThan } from "react-icons/fa";
import { red } from "@mui/material/colors";
function Navbar() {
  const [hideSidebar, setHideSideBar] = useState(true);
  const toggleChecked = () => setHideSideBar((value) => !value);
  return (
    <div>
      <div
        className={
          hideSidebar
            ? " mx-5 fixed right-0 h-full"
            : "w-72 fixed right-0 h-full"
        }
      >
        {hideSidebar ? (
          <div className="sidebar mt-8 cursor-pointer hover:text-lime-400 text-amber-500">
            <GiHamburgerMenu size={30} onClick={toggleChecked} />
          </div>
        ) : (
          <div className="sidebar-active text-center bg-black bg-opacity-80 text-white h-[500px]">
            <div className="ml-3 hover:text-lime-400 transition-all 0.5s ease-in cursor-pointer">
              <FaGreaterThan size={30} onClick={toggleChecked} />
            </div>
            <ul className="  my-10 space-y-5 mx-10">
              <li className=" cursor-pointer">Home</li>
              <li className=" cursor-pointer">Tokenomics</li>
              <li className=" cursor-pointer">Roadmap</li>
              <li className=" cursor-pointer">Why US</li>
              <li className=" cursor-pointer">Job for Hire</li>
              <li className=" cursor-pointer">Marketplace</li>
              <li className=" cursor-pointer">Casino</li>
              <li className=" cursor-pointer">Play to EARN</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export { Navbar };
