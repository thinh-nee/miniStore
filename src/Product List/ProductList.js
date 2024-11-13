import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductList.css";
import ChatButton from "../Button/ChatButton";

const ProductList = ({ products, onAddToCart }) => {
  // State để theo dõi trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15; // Mỗi trang hiển thị 15 sản phẩm (3 dòng x 5 sản phẩm)

  // Tính toán các sản phẩm cần hiển thị
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Tính toán số trang
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Hiển thị thông báo khi thêm sản phẩm vào giỏ hàng
  const handleAddToCartWithNotification = (product) => {
    onAddToCart(product);
    toast.success("Sản phẩm đã được thêm vào giỏ hàng!", {
      position: "top-right",
      autoClose: 3000, // Tự động đóng sau 3 giây
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      {/* Container cho Toastify */}
      <ToastContainer />

      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <ChatButton />
            <Link to={`/product/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-card__image"
              />
            </Link>
            <h3 className="product-card__name" style={{ marginTop: 10 }}>
              {product.name}
            </h3>
            <p className="product-card__price">
              <span className="product-card__original-price">
                {product.originalPrice.toLocaleString()}đ
              </span>
            </p>
            <p style={{ marginTop: -3 }}>
              <span className="product-card__sale-price">
                {product.salePrice.toLocaleString()}đ
              </span>
            </p>
            <button
              onClick={() => handleAddToCartWithNotification(product)}
              className="add-to-cart-btn"
              style={{ marginBottom: 2 }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>

      {/* Phần phân trang */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Trước
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Sau
        </button>
      </div>
    </div>
  );
};

export default ProductList;
