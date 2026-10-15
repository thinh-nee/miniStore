import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // Thêm CSS cho trang này

const ProductDetail = () => {
  const { id } = useParams();

  // Mảng giả định các sản phẩm với thông tin chi tiết
  const products = [
    {
      id: 1,
      name: "Laptop Asus Vivobook Go 15 E1504FA R5 7520U/16GB/512GB/Chuột/Win11 (NJ776W)",
      description: " Thiết kế đơn giản, sang trọng Sắc bạc trang nhã I Nặng 1.63 kg Đáp ứng tốt các tác vụ văn phòng AMD Ryzen 5 - 7520U | RAM 16 GB Màn hình rộng lớn, rõ nét 15.6 inch | Full HD | Anti Glare Âm thanh to rõ, mượt mà",
      originalPrice: 14.490000,
      salePrice: 120000,
      imageUrl: "/images/image1.png", // Cập nhật ảnh
    },
    {
      id: 2,
      name: "Điện thoại OPPO Reno11 Pro 5G 12GB/512GBSách Mắt Biếc",
      description: "Hệ điều hành: Android 14,Chip xử lý (CPU): MediaTek Dimensity 8200 5G 8 nhân",
      originalPrice: 11.900000,
      salePrice: 120000,

      imageUrl: "/images/image2.jpg", // Cập nhật ảnh
    },
    {
      id: 3,
      name: "Laptop HP Pavilion 15 eg2062TX i5 1235U/8GB/512GB/2GB MX550/Win11 (7C0W7PA)",
      description: "Chip Intel Gen 12 cân mọi tác vụ : Intel Core i5 1235U | GeForce MX550 2 GB Ngoại hình đơn giản, sang trọng: Dày 17.9 mm I Nặng 1.74 kg Hiển thị hình ảnh sắc nét, chân thực :15.6 inch | Full HD I BrightView | IPS Giải trí trọn vẹn với chất âm to rõ",
      originalPrice: 14490000,
      salePrice: 120000,

      imageUrl: "/images/image3.jpg", // Cập nhật ảnh
    },
    {
      id: 4,
      name: "Tai nghe TWS Samsung Galaxy Buds3 Pro R630N",
      description: "Phiên dịch trực tiếp.Thanh ánh sáng Blade Lights.Chống nước & bụi IP57.Sạc không dây.Tự động chuyển đổi kết nối linh hoạt (Auto Switch).Có mic thoại Sạc nhanh.",
      originalPrice: 5990000,
      salePrice: 120000,

      imageUrl: "/images/image4.jpg", // Cập nhật ảnh
    },
    {
      id: 5,
      name: "Pin sạc dự phòng Polymer 20000mAh Type C 10.5W AVA+ G-DX258 kèm Cáp Lightning và Cáp Type C",
      description: "Đèn LED báo hiệu kèm cáp Type C, cáp Lightning, cáp USB",
      originalPrice: 450000,
      salePrice: 120000,

      imageUrl: "/images/image5.jpeg", // Cập nhật ảnh
    },
    {
      id: 6,
      name: "Laptop Lenovo Ideapad Slim 3 15IAH8 i5 12450H/16GB/512GB/Win11 (83ER000EVN)",
      description: "Laptop Lenovo Ideapad Slim 3 15IAH8 i5 12450H (83ER000EVN) một mẫu laptop học tập - văn phòng sở hữu cấu hình mạnh mẽ với con chip Intel dòng H, RAM 16 GB cùng đa dạng các công nghệ hiện đại, hứa hẹn sẽ mang đến cho người dùng những trải nghiệm sử dụng làm việc và giải trí đa phương tiện một cách tối ưu và đầy tiện nghi.",
      originalPrice: 12900000,
      salePrice: 120000,

      imageUrl: "/images/image6.jpg",
    },
    {
      id: 7,
      name: "iPhone 16 Plus 128GB",
      description: "IPhone 16 Plus được trang bị vi xử lý Apple A18, cho hiệu năng mạnh mẽ,đáp ứng tốt các tác vụ nặng.",
      originalPrice: 25600000,
      salePrice: 120000,

      imageUrl: "/images/image7.jpg",
    },
    {
      id: 8,
      name: "Tai nghe chụp tai soundcore Space One A3035",
      description: "Công nghệ chống ồn chủ động ANC giúp triệt tiêu đến 98% tiếng ồn xung quanh.",
      originalPrice: 180000,
      salePrice: 120000,

      imageUrl: "/images/image8.jpg",
    },
    {
      id: 9,
      name: "Pin sạc dự phòng Polymer 10000mAh Không dây Magnetic Type C PD 20W Xmobile JP331",
      description: "Pin sạc dự phòng Polymer 10000mAh Không dây Magnetic Type C PD 20W Xmobile T156 được trang bị mức dung lượng cao đồng thời hỗ trợ dòng sạc ổn định, đây sẽ là món phụ kiện cần thiết giúp tối ưu trải nghiệm sử dụng các thiết bị điện tử của người dùng hàng ngày.",
      originalPrice: 455000,
      salePrice: 120000,

      imageUrl: "/images/image9.jpg",
    },
    {
      id: 10,
      name: "Laptop Acer Aspire 3 A315 44P R9W8 R7 5700U/8GB/512GB/Win11 (NX.KSJSV.002)",
      description: "Laptop Acer Aspire 3 A315-44P-R9W8 sở hữu cấu hình ấn tượng với R7-5700U cùng bộ nhớ RAM 8GB đa nhiệm ổn định cũng như ổ cứng SSD 512GB. Máy tính xách tay Acer này với màn hình 15.6 inch với tần số 60Hz hiển thị ổn định.",
      originalPrice: 10900000,
      salePrice: 120000,

      imageUrl: "/images/image10.jpg",
    },
    {
      id: 11,
      name: "Điện thoại realme C75 8GB/128GB",
      description: "Realme ưu ái ra mắt Realme C75 đầu tiên tại Việt Nam. Sản phẩm vừa có thiết kế vuông vức thời trang vừa đạt chuẩn độ bền quân đội MIL-STD-810H cùng IP69 bền bỉ.",
      originalPrice: 180000,
      salePrice: 120000,

      imageUrl: "/images/image11.jpg",
    },
    {
      id: 12,
      name: "Tai nghe Bluetooth True Wireless Rezo Air 5 Deluxe ANC",
      description: "Được trang bị công nghệ Active Noise Cancellation, kết nối Bluetooth ổn định và thời gian sử dụng lâu dài, Rezo Air 5 Deluxe ANC là lựa chọn lý tưởng cho những ai tìm kiếm một chiếc tai nghe tiện lợi, chất lượng và phù hợp với nhu cầu sử dụng hàng ngày.",
      originalPrice: 750000,
      salePrice: 120000,

      imageUrl: "/images/image12.jpg",
    },
    {
      id: 13,
      name: "Pin sạc dự phòng Polymer 10000mAh Không dây Magnetic Type C PD QC 3.0 20W Ugreen PB206",
      description: "Được thiết kế cho dòng iPhone 15-12: Với nam châm mạnh 10N bên trong, bộ sạc dự phòng từ tính này được gắn chắc chắn vào mặt sau của iPhone 15 Pro Max của bạn mà không lo cáp sạc hoặc bị tuột ra trong khi sạc. ",
      originalPrice: 660000,
      salePrice: 120000,

      imageUrl: "/images/image13.jpg",
    },
    {
      id: 14,
      name: "Laptop HP 15 fd0303TU i3 1315U/8GB/512GB/Win11 (A2NL4PA)",
      description: "Nếu bạn đang tìm kiếm một chiếc laptop HP cơ bản để phục vụ cho việc học hoặc làm việc văn phòng đến thiết kế đồ họa nhẹ nhàng thì còn chần chừ gì nữa mà không tham khảo ngay laptop HP 15 fd0303TU i3 1315U (A2NL4PA). Sản phẩm này ngoại hình hiện đại, gọn gàng sẵn sàng đồng hành cùng bạn ở bất kì đâu.",
      originalPrice: 11800000,
      salePrice: 120000,

      imageUrl: "/images/image14.jpg",
    },
    {
      id: 15,
      name: "Điện thoại Samsung Galaxy S24 Ultra 5G 12GB/256GB",
      description: "Samsung S24 Ultra là siêu phẩm smartphone đỉnh cao mở đầu năm 2024 đến từ nhà Samsung với chip Snapdragon 8 Gen 3 For Galaxy mạnh mẽ, công nghệ tương lai Galaxy AI cùng khung viền Titan đẳng cấp hứa hẹn sẽ mang tới nhiều sự thay đổi lớn về mặt thiết kế và cấu hình.",
      originalPrice: 28000000,
      salePrice: 120000,

      imageUrl: "/images/image15.jpg",
    },
    
    
  ];


  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-detail">
      <img src={product?.imageUrl} alt={product?.name} className="product-detail__image" />
      <div className="product-detail__info">
        <h1 style={{color:"#1873D3"}}>{product?.name}</h1>
        <p className="product-detail__description" style={{color:"Gray"}}>{product?.description}</p>
        <p className="original-price">Giá gốc: {product?.originalPrice.toLocaleString()}đ</p>
        <p className="sale-price">Giá sale: {product?.salePrice.toLocaleString()}đ</p>
        <a href="/" ><button className="button">Home</button></a>
      </div>
    </div>
  );
};

export default ProductDetail;
