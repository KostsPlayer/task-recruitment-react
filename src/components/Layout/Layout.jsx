import React from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import SmoothScroll from "../../helpers/SmoothScroll";
import { SearchProvider } from "../../helpers/SearchContext";

function Layout({ children }) {
  return (
    <>
      <SmoothScroll />
      <div className="layout">
        <Topbar />
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default Layout;
