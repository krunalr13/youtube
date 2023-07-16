import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2">
      <div className="flex items-center justify-between gap-4">
        <MenuIcon />
        <img alt="logo" src={logo} className="h-14" />
      </div>
      <div className="">
        <input
          type="text"
          className="w-1/2  px-5 border border-gray-400 p-2 rounded-l-full max-sm:w-20   max-sm:h-10"
          value={""}
        />
        <button
          className="border border-gray-400 p-2 rounded-r-full "
          onBlur={() => setShowSuggestion(false)}
        >
          <SearchIcon />
        </button>
      </div>
      <div>
        <span>Notifications</span>
        <span>Profile</span>
      </div>
    </header>
  );
};

export default Header;
