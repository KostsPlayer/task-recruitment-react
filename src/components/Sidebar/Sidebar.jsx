import React, { useState } from "react";
import {
  Users,
  LayoutDashboard,
  ArrowLeftFromLine,
  ChartNoAxesCombined,
  CalendarDays,
  Settings,
} from "lucide-react";
import logo from "./../../assets/logo/logo-fix-radius-other.png";
import { NavLink } from "react-router-dom";

function Sidebar({ showSidebar }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const ExpandedSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`sidebar ${showSidebar ? "show" : ""} ${
        isExpanded ? "" : "collapse"
      } `}
    >
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
          <NavLink className="menu-list-item" to={"/task-recruitment-react/"}>
            <span className="icon">
              <Users size={20} strokeWidth={1.5} />
            </span>
            <span className="text">Users</span>
          </NavLink>
          <NavLink className="menu-list-item" to={"/schedule"}>
            <span className="icon">
              <CalendarDays size={20} strokeWidth={1.5} />
            </span>
            <span className="text">Schedule</span>
          </NavLink>
          <NavLink className="menu-list-item" to={"/performance"}>
            <span className="icon">
              <ChartNoAxesCombined size={20} strokeWidth={1.5} />
            </span>
            <span className="text">Perfomance</span>
          </NavLink>
          <NavLink className="menu-list-item" to={"/settings"}>
            <span className="icon">
              <Settings size={20} strokeWidth={1.5} />
            </span>
            <span className="text"> Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
