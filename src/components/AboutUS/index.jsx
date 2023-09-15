import React from "react";
import aboutImg from "/AboutUsbackground.jpg";

function AboutUS() {
  return (
    <section className="about_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <div className="detail-box pr-md-2">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p className="detail_p_mt">
              Chúng tôi là Công ty Taxi Tây Ninh, một công ty taxi tư nhân hoạt động tại Tây Ninh. Với sứ mệnh cung cấp dịch vụ vận chuyển taxi chất lượng và tin cậy, chúng tôi đã xây dựng một đội lái xe chuyên nghiệp và tận tâm. Đội xe của chúng tôi được trang bị tiện nghi hiện đại và tuân thủ các tiêu chuẩn an toàn. Chúng tôi không chỉ phục vụ trong thành phố Tây Ninh mà còn mở rộng đến các vùng lân cận và các điểm đến khác. Với cam kết về chất lượng dịch vụ và sự hài lòng của khách hàng, chúng tôi hy vọng trở thành đối tác tin cậy trong việc cung cấp giải pháp vận chuyển taxi. Đặt xe ngay để trải nghiệm dịch vụ taxi tốt nhất tại Tây Ninh.
              </p>
              {/* <a href="about.html" className>
                Xem thêm về chúng tôi
              </a> */}
            </div>
          </div>
          <div className="col-md-5 px-0">
            <div className="img-box rounded">
              <img
                src={aboutImg}
                className="box_img rounded"
                alt="about img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUS