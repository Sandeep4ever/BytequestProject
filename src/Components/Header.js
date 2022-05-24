import React from "react";
import searchimg from "./Image/search.png";
import "./Header.css";
import user from "./Image/user.png";
import bookmark from "./Image/bookmark.png";
import bag from "./Image/bag.png";

const Header = () => {
  return (
    <>
      <div className="Main_Container">
        <div className="header_section">
          <p className="logo">TANN TRIM</p>
          <div className="Left_section">
            <img src={searchimg} alt="searchImg" />
            <img src={user} alt="searchImg" />
            <img src={bookmark} alt="searchImg" />
            <img src={bag} alt="searchImg" />
          </div>
        </div>
        <div className="Content">
          <p>Bags</p>
          <p>Trave</p>
          <p>Accesories</p>
          <p>Gifting</p>
          <p>Jewelery</p>
        </div>
      </div>
    </>
  );
};

export default Header;
