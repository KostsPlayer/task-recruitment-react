import React from "react";
import user from "./../../assets/images/user.png";
import { Search, Bell, EllipsisVertical } from "lucide-react";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-search">
        <button>
          <Search strokeWidth={1.5} size={20} />
        </button>
        <input type="text" placeholder="Search Keyword..." />
      </div>
      <div className="topbar-other">
        <div className="notification">
          <Bell strokeWidth={1.5} size={20} />
          <div className="active"></div>
        </div>
        <div className="line"></div>
        <div className="profile">
          <div className="image">
            <img src={user} alt="User" />
          </div>
          <div className="text">
            <span className="name">Muhammad Azka Nuril Islami</span>
            <span className="job">CEO</span>
          </div>
        </div>
        <span className="option">
          <EllipsisVertical strokeWidth={1.5} size={20} />
        </span>
      </div>
    </div>
  );
}

export default Topbar;
