import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const showSideBar = useSelector((state) => state.app.isSidebarOpen);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex fixed w-full top-20 left-0">
        {showSideBar && <SideBar />}
        <div className="w-10/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
