import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <div className="bg-white rounded-full">
        <img src={Logo} alt="Logo" className='size-10 object-contain'/>
      </div>
      <div>
        <link></link>
      </div>
      <div>user</div>
    </div>
  );
};

export default Sidebar;
