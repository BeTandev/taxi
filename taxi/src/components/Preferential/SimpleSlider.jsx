import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item" data-value="1">
    <div className="box ">
      <div className="img-box">
        <img src="/s1.png" />
      </div>
      <div className="detail-box">
        <h5>Home Welding</h5>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div className="box ">
      <div className="img-box">
        <img src="/s2.png" />
      </div>
      <div className="detail-box">
        <h5>Home Welding</h5>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div className="box ">
      <div className="img-box">
        <img src="/s3.png" />
      </div>
      <div className="detail-box">
        <h5>Home Welding</h5>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="1">
    <div className="box ">
      <div className="img-box">
        <img src="/s4.png" />
      </div>
      <div className="detail-box">
        <h5>Home Welding</h5>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="1">
    <div className="box ">
      <div className="img-box">
        <img src="/s5.png" />
      </div>
      <div className="detail-box">
        <h5>Home Welding</h5>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal
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
