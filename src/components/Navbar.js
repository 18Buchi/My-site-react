import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { sidebarData } from "./SidebarData";
import { SidebarOutLink } from "./SidebarOutLink";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navber() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <div className="header-logo">
              <img src={"/BUCHI.png"} />
          </div>

          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarOutLink.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.src}>
                    {item.icon}{"　"}
                    {item.title}
                  </a>
                </li>
              );
            })}

            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                      {item.icon}{"　"}
                      {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navber;
