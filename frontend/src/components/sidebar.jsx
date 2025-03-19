import React from 'react'
import Logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-white rounded-full">
        <img src={Logo} alt="Logo" />
      </div>
      <div>sideroutes</div>
      <div>user</div>
    </div>
  );
};

export default Sidebar;
