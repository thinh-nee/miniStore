// Account.js
import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div className="account">
      <h2>Đăng Nhập</h2>
      <form className="login-form">
        <label htmlFor="username">Tài khoản:</label>
        <input type="text" id="username" name="username" placeholder="Nhập tài khoản" />

        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" />

        <button type="submit" className="login-btn">Đăng Nhập</button>
      </form>
      <button className="register-btn">Đăng ký?</button>
      <button className="forgot-password-btn">Quên Mật Khẩu?</button>

      <div className="social-login">
        <p>Đăng nhập bằng</p>
        <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
        </a>
        <a href="https://www.google.gg/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" />
        </a>        
      
        </div>
      </div>
    </div>
  );
};

export default Account;
