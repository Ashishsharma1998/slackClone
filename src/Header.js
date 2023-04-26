import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTimeRounded";
import SearchIcon from "@mui/icons-material/SearchRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input placeholder="search ashish sharma" />
      </div>

      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
