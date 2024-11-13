// ChatButton.js
import React, { useState, useEffect } from "react";
import "./ChatButton.css";

const ChatButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Xử lý sự kiện cuộn
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {  // Chỉnh số px để điều chỉnh khi nào nút xuất hiện
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="chat-button">
        <button onClick={() => alert("Bạn hãy liên hệ qua: Facebook NiniStore để được hỗ trợ  nhé!")}>
          Chat ngay
        </button>
      </div>
    )
  );
};

export default ChatButton;
