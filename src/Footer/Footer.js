import React from 'react';
import './Footer.css'; // Import file CSS cho Footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section: Về Fahasa */}
        <div className="footer-section about">
          
          <p>Địa chỉ:12A,Q12, TP. Hồ Chí Minh</p>
          <p>Email: <a href="mailto:support@tartarus.com">ndt@gmail.com</a></p>
          <p>Hotline: <a href="tel:18001234">1900-2099</a></p>
        </div>

        {/* Section: Dịch Vụ Khách Hàng */}
        <div className="footer-section customer-service">
          <h3>Dịch Vụ Khách Hàng</h3>
          <ul>
            <li><a href="/">Hướng Dẫn Mua Hàng</a></li>
            <li><a href="/">Chính Sách Bảo Mật</a></li>
            <li><a href="/">Chính Sách Đổi Trả</a></li>
          </ul>
        </div>

        {/* Section: Giới Thiệu */}
          

        {/* Section: Theo Dõi Chúng Tôi */}
        <div className="footer-section social-media">
          <h3>Theo Dõi Chúng Tôi</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
            </a>
            <a href="https://chat.zalo.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="https://iconlogovector.com/uploads/images/2024/11/lg-672c066b31fd3-Zalo.webp" alt="Zalo" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; 2024 MiniStore. </p>
        </div>
        <div className="footer-bottom-right">
          <p>Website được phát triển bởi <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Mr.T</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
