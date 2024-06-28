import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import '../assets/css/style.css';
import '../assets/css/sidebar.css';
import plus from '../assets/img/plus-circle.png';
import user from '../assets/img/user.png';
import box from '../assets/img/box.png';
import inbox from '../assets/img/inbox.png';
import bell from '../assets/img/bell.png'
import thumbs from '../assets/img/thumbs-up.png'
import message from '../assets/img/message-square.png'
import logo from '../assets/img/Group 5.png'





const Sidebar = props =>
{
  const location = useLocation();
  const isOpen = false
  

  return (
    <div className="App" >
      <div className="page ">
        <div className={`sidebar ${isOpen ? "sidebar--open" : "sidebar-close"}`}>
            <div className="toplogobackground">
            <img src={logo} alt="test" className="" />
            </div>
          <div className="trigger " >
            {/* <img  alt="test" style={{ height: "55px", width: '100%', }} /> */}
            <img src={logo} alt="test" className="logo_icon" />
            {/* <img src={Logomark} alt="test" className="mob_logo_icon" /> */}
          </div>

          <div className="sidebar-position" style={{ marginTop: 10 }} >
            <Link to="/project/endominance/dashboard" >
                <div className="selectionsquare">
                <img src={plus}  alt="test" className="menu_icon" />
                </div>
                <img src={plus}  alt="test" className="menu_icon actIc" style={{ display: 'none' }} />
                <span >Dashboard</span>
            </Link>
          </div>
          <div className="sidebar-position" >
                <Link to="/project/endominance/userRole" >
                  <img src={user}  alt="test" className="menu_icon" />
                  <img src={user}  alt="test" className="menu_icon actIc" style={{ display: 'none' }} />
                  <span>Users</span>
                </Link>
              </div>
          <div className="sidebar-position" >
            <Link to="/project/endominance/Positions" >
              <img src={box}  alt="test" className="menu_icon" />
              <img src={box}  alt="test" className="menu_icon actIc" style={{ display: 'none' }} />
              <span>Positions</span>
            </Link>
          </div>

          <div className="sidebar-position" >
            <Link to="/project/endominance/profile" >
              <img src={bell}     alt="test" className="menu_icon profile" />
              <img src={bell} alt="test" className="menu_icon profile actIc" style={{ display: 'none' }} />
              <span>My Profile</span>
            </Link>
          </div>

          <div className="sidebar-position" >
            <Link to="/project/endominance/profile" >
              <img src={inbox}     alt="test" className="menu_icon profile" />
              <img src={inbox} alt="test" className="menu_icon profile actIc" style={{ display: 'none' }} />
              <span>My Profile</span>
            </Link>
          </div>


          <div className="sidebar-position" >
            <Link to="/project/endominance/profile" >
              <img src={thumbs}     alt="test" className="menu_icon profile" />
              <img src={thumbs} alt="test" className="menu_icon profile actIc" style={{ display: 'none' }} />
              <span>My Profile</span>
            </Link>
          </div>

          <div className="logout-div">
            <div className="sidebar-position">
              <Link to="/" onClick={localStorage.removeItem("key")}>
                <img src={message}  alt="test" className="" />
                {/* <span>Logout</span> */}
                {/* <img  alt="test" className="logout_icon" /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
