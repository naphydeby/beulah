import React, { useState } from 'react';

import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';


const Sidenav = () => {
  const [openBar, setOpenBar] = useState(false);

  const handleClick = () => {
    setOpenBar(!openBar);
  };

  return (
    <div className='fixed flex gap-[2px]'>
      <div className='w-[20vw] h-[100vh] bg-white pl-8 pt-6 rounded-[1px]'>
        <div className='flex gap-2 items-center'>
          <img className='w-[39.86px] h-[39px]' src="./image/Beual-logo.png" alt="logo" />
          <h1 className='text-[#06476D] text-[20px] font-[800] font-[Avenir] '>Beaulah Destiny Club</h1>
        </div><br /><br />

        <div className='text-[gray]'>
          <NavLink
            to='/'
            
            className={({ isActive }) => `flex items-center gap-4 font-[500] w-[90%] h-[40px] pl-4 ${isActive ? 'bg-[#EBEBEB] text-black h-[45px] rounded-[5px] w-[90%] font-[700]' : ''}`}
          >
            <img src="./image/home.png" alt="home-image" />
            <p className='text-[Avenir]'>Home</p>
          </NavLink><br />

          <div onClick={handleClick} className='flex cursor-pointer items-center pl-4 gap-4 font-[500]'>
            <img src="./image/folder.png" alt="folder-image" />
            <p className='text-[Avenir] pr-16'>Application</p>
            <img className='size-4' src="./image/down-chevron.png" alt="drop-down" />
          </div><br />

          <div className={`${openBar ? 'block' : 'hidden'}`}>
            <NavLink
              to='/membership'
              className={({ isActive }) => `flex items-center pl-14 gap-4 font-[500] ${isActive ? 'bg-[#EBEBEB] text-black h-[45px] rounded-[5px] w-[90%] font-[700]' : ''}`}
            >
              <p className='text-[Avenir]'>Membership</p>
            </NavLink><br />

            <NavLink
              to='/userpage'
              className={({ isActive }) => `flex items-center pl-14 gap-4 font-[500] ${isActive ? 'bg-[#EBEBEB] text-black h-[45px] rounded-[5px] w-[90%] font-[700]' : ''}`}
            >
              <p className='text-[Avenir]'>Loan</p>
            </NavLink><br />

            <NavLink
              className={`flex items-center pl-14 gap-4 font-[500]`}
            >
              <p className='text-[Avenir]'>Early Withdrawal</p>
            </NavLink><br />
          </div>

          <div>
            <NavLink to='/userpage1'
              className={`flex items-center gap-4 font-[500] pl-2 `}
            >
              <img className='size-8' src="./image/users.png" alt="users-image" />
              <p className='text-[Avenir]'>Users</p>
            </NavLink><br />

            <div style={{ marginTop: openBar ? '240px' : '0' }}>
              <NavLink to='/signin'
                className={`flex items-center gap-4 font-[500] pl-2 `}
              >
                <img className='size-8' src="./image/setting (3).png" alt="admin-image" />
                <p className='text-[Avenir]'>Super Admin Log In</p>
              </NavLink><br />

              <NavLink
                className={`flex items-center gap-4 font-[500] pl-2 `}
              >
                <img className='size-8' src="./image/logout (1).png" alt="logout-image" />
                <p className='text-[Avenir]'>Logout</p>
              </NavLink><br />
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Sidenav;
