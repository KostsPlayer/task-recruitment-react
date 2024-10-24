import React from "react";
import user from "./../../assets/images/user.png";
import { Search, Bell, EllipsisVertical } from "lucide-react";
import { useSearch } from "../../helpers/SearchContext";

function Topbar() {
  const { setSearch } = useSearch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="topbar">
      <div className="topbar-search">
        <button>
          <Search strokeWidth={1.5} size={20} />
        </button>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Keyword..."
        />
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
