// Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    onFilterChange(name, value, checked);
  };

  return (
    <aside className="sidebar">
    

      <div className="sidebar__filter">
        <h3>Sản Phẩm</h3>
        <ul>
          <li>
            <input type="checkbox" name="category" value="Điện thoại" onChange={handleCheckboxChange} /> Điện Thoại
          </li>
          <li>
            <input type="checkbox" name="category" value="Laptop" onChange={handleCheckboxChange} /> Laptop
          </li>
          <li>
            <input type="checkbox" name="category" value="Tai nghe" onChange={handleCheckboxChange} /> Tai nghe
          </li>
          <li>
            <input type="checkbox" name="category" value="Sạc dự phòng" onChange={handleCheckboxChange} /> Sạc dự phòng
          </li>
          
        </ul>
      </div>
      <a href="/">
        <button className="button">Home</button>
      </a>

      
      
     
    </aside>
  );
};

export default Sidebar;
