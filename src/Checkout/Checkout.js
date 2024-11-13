import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [billingInfo, setBillingInfo] = useState(false);
  const [invoiceInfo, setInvoiceInfo] = useState({
    buyerName: '',
    companyName: '',
    companyAddress: '',
    taxCode: '',
    emailForInvoice: '',
  });

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInvoiceInfoChange = (e) => {
    const { name, value } = e.target;
    setInvoiceInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = () => {
    alert("Đơn hàng của bạn đã được đặt, cảm ơn bạn đã mua hàng của chúng tôi.");
  };

  return (
    <div className="checkout-form">
      <h2 style={{textAlign: 'center'}} className='title'>Địa chỉ giao hàng</h2>
      <form>
        {/* Personal Details */}
        <label>
          Họ và tên:
          <input type="text" name="fullName" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Số điện thoại:
          <input type="tel" name="phone" required />
        </label>

        {/* Address Details */}
        <label>
          Quốc gia:
          <select value={selectedCountry} onChange={handleCountryChange} required>
            <option value="">Chọn quốc gia</option>
            <option value="Vietnam">Việt Nam</option>
            <option value="USA">USA</option>
            {/* Add more countries as needed */}
          </select>
        </label>

        <label>
          Tỉnh/Thành phố:
          <select value={selectedCity} onChange={handleCityChange} required>
            <option value="">Chọn tỉnh/thành phố</option>
            <option value="Hanoi">Hanoi</option>
            <option value="Ho Chi Minh City">Ho Chi Minh City</option>
            {/* Bind districts based on the selected city */}
          </select>
        </label>

        <label>
          Quận/Huyện:
          <input type="text" name="district" required />
        </label>

        <label>
          Phường xã:
          <input type="text" name="ward" required />
        </label>

        <label>
          Địa chỉ nhận hàng:
          <input type="text" name="deliveryAddress" required />
        </label>

        {/* Shipping Method */}
        <label>
          Phương thức vận chuyển:
          <input
            type="text"
            name="shippingMethod"
            placeholder="Please fill in your delivery address first."
            readOnly
          />
        </label>

        {/* Payment Method */}
        <h3>Phương thức thanh toán</h3>
        <div className="payment-options">
          
          <label>
            <input type="radio" name="paymentMethod" value="tienmat" onChange={handlePaymentChange} />
            Thanh toán khi nhận hàng
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="momo" onChange={handlePaymentChange} />
            MoMo
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="cash" onChange={handlePaymentChange} />
            Cash on Delivery
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="atm" onChange={handlePaymentChange} />
            ATM Internet Banking
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="visa" onChange={handlePaymentChange} />
            Visa / MasterCard
          </label>
        </div>

        {/* Promo Code */}
        <label>
          Mã KM/Quà tặng:
          <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
        </label>

        {/* Billing Information */}
        <div className="billing-options">
          <label>
            <input type="checkbox" checked={billingInfo} onChange={() => setBillingInfo(!billingInfo)} />
            Ghi chú
          </label>
          <label>
            <input
              type="checkbox" 
              checked={invoiceInfo}
              onChange={() => setInvoiceInfo(!invoiceInfo)}
            />
            Hóa đơn công ty
          </label>
        </div>

        {/* VAT Invoice Information */}
        {invoiceInfo && (
          <div className="invoice-info">
            <p style={{color: "red"}}>(*Từ ngày 01/11/2020, Công ty Tartarus không giải quyết việc xuất lại hóa đơn cho các trường hợp Quý khách không đăng ký thông tin).</p>
            <label>
              Họ tên người mua:
              <input type="text" name="buyerName" value={invoiceInfo.buyerName} onChange={handleInvoiceInfoChange} />
            </label>
            <label>
              Tên công ty:
              <input type="text" name="companyName" value={invoiceInfo.companyName} onChange={handleInvoiceInfoChange} />
            </label>
            <label>
              Địa chỉ công ty:
              <input type="text" name="companyAddress" value={invoiceInfo.companyAddress} onChange={handleInvoiceInfoChange} />
            </label>
            <label>
              Mã số thuế:
              <input type="text" name="taxCode" value={invoiceInfo.taxCode} onChange={handleInvoiceInfoChange} />
            </label>
            <label>
              Email nhận hóa đơn:
              <input type="email" name="emailForInvoice" value={invoiceInfo.emailForInvoice} onChange={handleInvoiceInfoChange} />
            </label>
          </div>
        )}

        {/* Order Summary */}
        <h3>Kiểm tra đơn hàng</h3>
        {/* List the items dynamically here */}
        <div className="order-summary">
          <p>Giá: | Tên sản phẩm | Số lượng | Giá</p>
          <p>Sản phẩm: $100.00</p>
        </div>

        {/* Terms and Conditions */}
        <label>

          Bằng việc xác nhận mua hàng bạn đã đồng ý điều khoản & điều kiện của tartarus
                    <input type="checkbox" required />
        </label>

        {/* Confirm Payment Button */}
        <button
          type="button"
          className="confirm-payment-btn"
          onClick={handleOrderSubmit}
        >
          Xác nhận thanh toán
        </button>
      </form>
    </div>
  );
};

export default Checkout;
