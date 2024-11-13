import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaSearch, FaTh } from "react-icons/fa";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Gọi hàm tìm kiếm từ App.js
  };

  const menuItems = [
    
  ];

  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <Link to="/">
          <img src="./images/logo1.png" alt="Trang chủ" />
        </Link>
      </div>

      {/* Dropdown Menu */}
      <div
        className="header__menu-icon"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <FaTh />
        {isMenuOpen && (
          <div className="header__dropdown-menu">
            <ul className="dropdown__menu">
              {menuItems.map((item, index) => (
                <li key={index} className="dropdown__menu-item">
                  <span>{item.title}</span>
                  {item.subcategories && (
                    <ul className="dropdown__submenu">
                      {item.subcategories.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link to={sub.link}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search */}
      <div className="header__search">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Tìm kiếm sản phẩm..."
        />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Actions */}
      <div className="header__actions">
        <Link to="/notifications" className="header__icon">
          🔔
        </Link>
        <Link to="/cart" className="header__icon">
          🛒
        </Link>
        <Link to="/account" className="header__icon">
          👤
        </Link>
        <div className="header__flag">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_640.png"
            alt="Vietnam Flag"
            className="header__flag-icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
