import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart
      ? JSON.parse(storedCart).map((item) => ({
          ...item,
          quantity: isNaN(item.quantity) ? 1 : item.quantity,
        }))
      : [];
  };

  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage());
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Đồng bộ localStorage với cartItems khi cartItems thay đổi
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (index, delta) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item, i) => {
        if (i === index) {
          let updatedQuantity = item.quantity + delta;
          if (updatedQuantity <= 0) {
            setConfirmDeleteIndex(index);
          }
          return { ...item, quantity: Math.max(updatedQuantity, 0) };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const handleDeleteProduct = () => {
    setCartItems((prevItems) =>
      prevItems.filter((_, i) => i !== confirmDeleteIndex)
    );
    setConfirmDeleteIndex(null);
  };

  const handleCancelDelete = () => {
    setConfirmDeleteIndex(null);
  };

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscountCode = () => {
    if (discountCode === "SALE20") setDiscount(0.2);
    else if (discountCode === "SALE10") setDiscount(0.1);
    else setDiscount(0);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );
  const discountedPrice = totalPrice * (1 - discount);

  const handleClearCart = () => {
    setCartItems([]); // Xóa giỏ hàng trong state
    localStorage.removeItem("cart"); // Xóa giỏ hàng trong localStorage
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleOrderClick = () => {
    navigate("/checkout"); // Chuyển hướng đến trang thanh toán
  };

  return (
    <div className="cart">
      
      <h2>Giỏ Hàng Của Bạn</h2>
      {cartItems.length === 0 ? (
        <p style={{ color: "red", textAlign: "center" }}>Giỏ hàng trống</p>
      ) : (
        <div className="left">
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Xóa Giỏ Hàng
          </button>

          {cartItems.map((product, index) => (
            <div key={index} className="cart-item">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="cart-item__image"
              />
              <div className="cart-item__info">
                <h5>{product.name}</h5>
                <p style={{ color: "#00C42E", margin: "10px" }}>
                  Giá: {product.salePrice.toLocaleString()}đ
                </p>
                <div className="cart-item__quantity">
                  <button onClick={() => handleQuantityChange(index, -1)}>
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>
                    +
                  </button>
                </div>

                {confirmDeleteIndex === index && (
                  <div className="confirm-delete">
                    <p>Bạn chắc chắn muốn xóa sản phẩm này?</p>
                    <button onClick={handleDeleteProduct}>Xóa</button>
                    <button onClick={handleCancelDelete}>Hủy</button>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="cart-discount">
            <input
              type="text"
              placeholder="Nhập mã giảm giá"
              value={discountCode}
              onChange={handleDiscountCodeChange}
            />
            <button onClick={applyDiscountCode}>Áp dụng</button>
          </div>

          <div className="cart-total">
            <p>Tổng tiền: {totalPrice.toLocaleString()}đ</p>
            {discount > 0 && <p>Giảm giá: {discount * 100}%</p>}
            <p>Thành tiền: {discountedPrice.toLocaleString()}đ</p>
            <button className="checkout-button" onClick={handleOrderClick}>
              Đặt hàng
            </button>

          </div>

          <div className="payment-method">
        <h3>Chọn phương thức thanh toán</h3>
        <div>
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Thẻ tí t\xedn dụng"
            checked={paymentMethod === "Thẻ tín dụng"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="creditCard">
            <img
              src="/images/tindung.jpg"
              alt="Thẻ tín dụng"
              className="payment-icon"
            />
            Thẻ tín dụng
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="Tiền mặt"
            checked={paymentMethod === "Tiền mặt"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="cash">
            <img
              src="/images/tien.png"
              alt="Tiền mặt"
              className="payment-icon"
            />
            Tiền mặt
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="momo"
            name="paymentMethod"
            value="Momo"
            checked={paymentMethod === "Momo"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="momo">
            <img
              src="/images/momo.jpg"
              alt="Momo"
              className="payment-icon"
            />
            Momo
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="bank"
            name="paymentMethod"
            value="Ngân hàng"
            checked={paymentMethod === "Ngân hàng"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="bank">
            <img
              src="/images/bank.png"
              alt="Ngân hàng"
              className="payment-icon"
            />
            Ngân hàng
          </label>
          
        </div>
      </div>
        </div>
        
      )}
    </div>
  );
};

export default Cart;
