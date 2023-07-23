import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2 fixed w-full">
      <div className="flex items-center justify-between gap-4">
        <MenuIcon />
        <Link to="/">
          <img alt="logo" src={logo} className="h-14" />
        </Link>
      </div>
      <SearchBar />
      <div className="flex gap-4">
        <NotificationsNoneIcon />
        <AccountCircleIcon />
      </div>
    </header>
  );
};

export default Header;
