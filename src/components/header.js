import React from 'react';
import '../assets/css/header.css';
import logo from '../assets/img/Group 11.png';
import logoutlogo from '../assets/img/log-out.png'

function Header() {
  return (
    <div>
      <div className={false ? "header-fix" : "header-respones"}>
        <div className="header-container">
          <div>
            <img src={logo} alt="test" className="headerlogo" />
          </div>
          {/* <div className="logout-container">
            
            <h2 className='logouttext'>Logout</h2>
            <div className='logoutlogocontainer'><img src={logoutlogo} alt="" /></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
