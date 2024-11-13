import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation,Link,Switch } from "react-router-dom";
import Header from "./Header/Header";
import Sider from "./Sidebar/Sidebar"
import ProductList from "./Product List/ProductList";
import Account from "./Account/Account"
import BackToTop from "./Button/BackToTop";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import ProductDetail from "./Product List/ProductDetail";
import Footer from "./Footer/Footer";
import "./App.css";



const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    promotion: [],
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allProducts = [
    
    {
      id: 1,
      name: "Laptop Asus Vivobook Go 15 E1504FA R5 7520U/16GB/512GB/Chuột/Win11 (NJ776W)",
      category: "Laptop",
      originalPrice: 14.490000,
      salePrice: 120000,

      imageUrl: "/images/image1.png", // Cập nhật ảnh
    },
    {
      id: 2,
      name: "Điện thoại OPPO Reno11 Pro 5G 12GB/512GBSách Mắt Biếc",
      category: "Điện thoại",
      originalPrice: 11.900000,
      salePrice: 120000,

      imageUrl: "/images/image2.jpg", // Cập nhật ảnh
    },
    {
      id: 3,
      name: "Laptop HP Pavilion 15 eg2062TX i5 1235U/8GB/512GB/2GB MX550/Win11 (7C0W7PA)",
      category: "Laptop",
      originalPrice: 14.490000,
      salePrice: 120000,
      imageUrl: "/images/image3.jpg", // Cập nhật ảnh
    },
    {
      id: 4,
      name: "Tai nghe TWS Samsung Galaxy Buds3 Pro R630N",
      category: "Tai nghe",
      originalPrice: 5.990000,
      salePrice: 120000,

      imageUrl:"/images/image4.jpg",
    },
    {
      id: 5,
      name: "Pin sạc dự phòng Polymer 20000mAh Type C 10.5W AVA+ G-DX258 kèm Cáp Lightning và Cáp Type C",
      category: "Sạc dự phòng",
      originalPrice: 450000,
      salePrice: 120000,

      imageUrl: "/images/image5.jpg",
    },
    {
      id: 6,
      name: "Laptop Lenovo Ideapad Slim 3 15IAH8 i5 12450H/16GB/512GB/Win11 (83ER000EVN)",
      category: "Laptop",
      originalPrice: 12.900000,
      salePrice: 120000,

      imageUrl: "/images/image6.jpg",
    },
    {
      id: 7,
      name: "iPhone 16 Plus 128GB",
      category: "Điện thoại",
      originalPrice: 25.600000,
      salePrice: 120000,

      imageUrl:"/images/image7.jpg",
    },
    {
      id: 8,
      name: "Tai nghe chụp tai soundcore Space One A3035",
      category: "Tai nghe",
      originalPrice: 180000,
      salePrice: 120000,

      imageUrl: "/images/image8.jpg",
    },
    {
      id: 9,
      name: "Pin sạc dự phòng Polymer 10000mAh Không dây Magnetic Type C PD 20W Xmobile JP331",
      category: "Sạc dự phòng",
      originalPrice: 455000,
      salePrice: 120000,

      imageUrl:"/images/image9.jpg",
    },
    {
      id: 10,
      name: "Laptop Acer Aspire 3 A315 44P R9W8 R7 5700U/8GB/512GB/Win11 (NX.KSJSV.002)",
      category: "Laptop",
      originalPrice: 10.900000,
      salePrice: 120000,

      imageUrl:"/images/image10.jpg",
    },
    {
      id: 11,
      name: "Điện thoại realme C75 8GB/128GB",
      category: "Điện thoại",
      originalPrice: 180000,
      salePrice: 120000,

      imageUrl:"/images/image11.jpg",
    },
    {
      id: 12,
      name: "Tai nghe Bluetooth True Wireless Rezo Air 5 Deluxe ANC",
      category: "Tai nghe",
      originalPrice: 750000,
      salePrice: 120000,

      imageUrl:"/images/image12.jpg",
    },
    {
      id: 13,
      name: "Pin sạc dự phòng Polymer 10000mAh Không dây Magnetic Type C PD QC 3.0 20W Ugreen PB206",
      category: "Sạc dự phòng",
      originalPrice: 660000,
      salePrice: 120000,

      imageUrl:"/images/image13.jpg",
    },
    {
      id: 14,
      name: "Laptop HP 15 fd0303TU i3 1315U/8GB/512GB/Win11 (A2NL4PA)",
      category: "Laptop",
      originalPrice: 11.800000,
      salePrice: 120000,

      imageUrl:"/images/image14.jpg",
    },
    {
      id: 15,
      name: "Điện thoại Samsung Galaxy S24 Ultra 5G 12GB/256GB",
      category: "Điện thoại",
      originalPrice: 28.000000,
      salePrice: 120000,

      imageUrl:"/images/image15.jpg",
    },
    
    
  ];

  const location = useLocation(); // Hook để lấy vị trí hiện tại

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (name, value, checked) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (checked) {
        updatedFilters[name] = [...updatedFilters[name], value];
      } else {
        updatedFilters[name] = updatedFilters[name].filter(
          (item) => item !== value
        );
      }

      return updatedFilters;
    });
  };

  useEffect(() => {
    const applyFilters = () => {
      let products = allProducts;

      if (filters.category.length > 0) {
        products = products.filter((product) =>
          filters.category.includes(product.category)
        );
      }

      if (filters.price.length > 0) {
        products = products.filter((product) => {
          return filters.price.some((priceRange) => {
            if (priceRange === "100000") return product.originalPrice <= 100000;
            if (priceRange === "200000")
              return (
                product.originalPrice > 100000 &&
                product.originalPrice <= 200000
              );
            return true;
          });
        });
      }

      if (filters.promotion.length > 0) {
        products = products.filter(
          (product) =>
            filters.promotion.includes("Giảm giá") &&
            product.salePrice < product.originalPrice
        );
      }

      setFilteredProducts(products);
    };

    applyFilters();
  }, [filters, searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts((prevProducts) =>
        prevProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchQuery]);

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      {/* Kiểm tra nếu không nằm trong hideBannerPaths thì hiển thị banner */}
      <MainContent
        filteredProducts={filteredProducts}
        onAddToCart={handleAddToCart}
        cart={cart}
        onFilterChange={handleFilterChange}
      />
      <Footer />
    </div>
  );
};

const MainContent = ({ filteredProducts, onAddToCart, cart, onFilterChange }) => {
  const location = useLocation();
  const hideSiderPaths = ["/dienthoai", "/laptop","tainghe","sacduphong", "/checkout"]; // Thêm "/checkout" để ẩn sidebar trên trang checkout
  return (
    <div className="app__content">
      
      {!hideSiderPaths.includes(location.pathname) && (
        <Sider onFilterChange={onFilterChange} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <BackToTop />
    </div>
  );
};

          

export default App;
