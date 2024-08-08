import React, { useState } from "react";

import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Managesidenav = () => {
  const [openBar, setOpenBar] = useState(false);

  const handleClick = () => {
    setOpenBar(!openBar);
  };

  return (
    <div className="fixed flex gap-[2px]">
      <div className="lg:w-[25vw] xl:w-[23vw] 2xl:w-[20vw] h-[100vh] bg-white lg:pl-[10%] 2xl:pl-[15%] lg:pt-6 2xl:pt-6 rounded-[1px]">
        <div className="flex gap-2 items-center">
          <img
            className="w-[39.86px] h-[39px]"
            src="./image/Beual-logo.png"
            alt="logo"
          />
          <h1 className="text-[#06476D] lg:text-[18px] xl:text-[20px] font-[800] font-[Avenir]  ">
            Beaulah Destiny Club
          </h1>
        </div>
        <br />
        <br />

        <div className="text-[gray]">
          <div
            onClick={handleClick}
            className="flex cursor-pointer items-center pl-4 gap-2 font-[500]"
          >
            <img src="./image/setting (3).png" alt="settings-image" />
            <NavLink to ='/manageadmins' >
            <p className="text-[Avenir] ">
              Manage Admin
            </p>
            </NavLink>
            <img
              className="size-4 ml-4"
              src="./image/down-chevron.png"
              alt="drop-down"
            />
          </div>
          <br />

          <div className={`${openBar ? "block" : "hidden"}`}>
            <NavLink
              to="/addadmin"
              className={({ isActive }) =>
                `flex items-center pl-14 gap-4 font-[500] ${
                  isActive
                    ? "bg-[#EBEBEB] text-black h-[45px] rounded-[5px] w-[90%] font-[700]"
                    : ""
                }`
              }
            >
              <p className="text-[Avenir]">Add Admin</p>
            </NavLink>
            <br />
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Managesidenav;
