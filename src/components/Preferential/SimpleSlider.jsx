import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item" data-value="1">
    <div className="box ">
      <div className="detail-box">
        <h5>An Toàn Luôn Ưu Tiên</h5>
        <p>
        Taxi Tây Ninh luôn đặt sự an toàn của khách hàng lên hàng đầu. Đội xe được kiểm tra và bảo dưỡng định kỳ để đảm bảo hoạt động một cách an toàn và tin cậy. Các tài xế được đào tạo chuyên nghiệp và tuân thủ nghiêm ngặt các quy tắc giao thông và an toàn.
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div className="box ">
      <div className="detail-box">
        <h5>Đội Xe Đa Dạng</h5>
        <p>
        Với một đội xe đa dạng, từ các loại sedan thoải mái cho chuyến đi cá nhân đến SUV lớn hơn để phục vụ các nhóm hoặc hành lý nhiều, Taxi Tây Ninh luôn cung cấp nhiều lựa chọn phương tiện để đáp ứng mọi nhu cầu của khách hàng.
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div className="box ">
      <div className="detail-box">
        <h5>Ứng Dụng Di Động Tiện Lợi</h5>
        <p>
        Ứng dụng di động của chúng tôi đảm bảo sự thuận tiện tối đa. Bạn có thể đặt xe dễ dàng, xem lộ trình, và thanh toán trực tiếp thông qua ứng dụng. Ứng dụng cung cấp thông tin chi tiết về tài xế, giá cước, và thậm chí cho phép chia sẻ thông tin chuyến đi với người thân hoặc bạn bè.
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="1">
    <div className="box ">
      <div className="detail-box">
        <h5>Phục Vụ 24/7</h5>
        <p>
        Taxi Tây Ninh luôn sẵn sàng phục vụ bạn mọi lúc, mọi nơi, ngay cả vào ban đêm và các ngày lễ. Điều này giúp đảm bảo rằng bạn có phương tiện đi lại tin cậy bất kể tình huống.
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="1">
    <div className="box ">
      <div className="detail-box">
        <h5>Giá Cước Cạnh Tranh</h5>
        <p>
        Chúng tôi cam kết cung cấp giá cước cạnh tranh, giúp bạn tiết kiệm chi phí trong hành trình của mình. Giá cước luôn minh bạch và không có phí ẩn.gi
        </p>
      </div>
    </div>
  </div>,
];

const responsiveSettings = {
  0: { items: 1 },
  768: { items: 3 },
};

const SimpleSlider = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsiveSettings}
      controlsStrategy="default"
      disableButtonsControls
      infinite={true}
      autoPlay={true}
      autoPlayInterval={1800}
    />
  );
};

export default SimpleSlider;
