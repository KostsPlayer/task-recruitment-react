import React, { useState } from "react";
import { Users, LayoutDashboard, ArrowLeftFromLine } from "lucide-react";
import logo from "./../../assets/logo/logo-fix-radius-other.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const ExpandedSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "" : "collapse"}`}>
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
        <span onClick={ExpandedSidebar}>
          <ArrowLeftFromLine size={24} strokeWidth={1.25} />
        </span>
      </div>
      <div className="sidebar-menus">
        <div className="menu-title">Main Menu</div>
        <div className="menu-list">
          <NavLink className="menu-list-item" to={"/dashboard"}>
            <span className="icon">
              <LayoutDashboard size={20} strokeWidth={1.5} />
            </span>
            <span className="text">Dashboard</span>
          </NavLink>
          <NavLink className="menu-list-item" to={"/task-recruitment-react"}>
            <span className="icon">
              <Users size={20} strokeWidth={1.5} />
            </span>
            <span className="text">Users</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
