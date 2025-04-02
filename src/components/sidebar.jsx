import React from "react";

function Sidebar() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
        <h4></h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="p-4 w-100">
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
}

export default Sidebar;
