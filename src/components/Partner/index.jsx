import React from "react";
import aboutImg from "/taxi-driver.jpeg";
import { Link } from "react-router-dom";

function Partner() {
  return (
    <section className="about_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 px-0 offset-md-1">
            <div className="img-box pr-md-2 rounded">
              <img
                src={aboutImg}
                className="box_img rounded"
                alt="about img"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Trở thành tài xế với chúng tôi</h2>
              </div>
              <p className="detail_p_mt mb-5">
              Trở thành tài xế taxi cho công ty Taxi Tây Ninh mang lại nhiều lợi ích hấp dẫn. Chúng tôi cam kết môi trường làm việc chuyên nghiệp và thân thiện, đào tạo liên tục để nâng cao kỹ năng lái xe và giao tiếp. Tài xế nhận mức thu nhập ổn định và có cơ hội kiếm thêm từ tiền thưởng và khách hàng thường xuyên. Tham gia công ty Taxi Tây Ninh, bạn trở thành phần của đội ngũ đáng tin cậy, xây dựng dịch vụ vận chuyển taxi chất lượng và tin cậy trong cộng đồng.
              </p>
              <Link to="/partner-page" className="mx-auto d-block col-8 text-center">
                Trở thành đối tác với chúng tôi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner