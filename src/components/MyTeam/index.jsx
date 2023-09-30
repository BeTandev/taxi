import React from "react";

const members = [
  {
    id: 1,
    name: "Trần Lê Nhứt Tân",
    position: "Frontend và hệ thống",
    avatar: '/t1.jpg',
  },
  {
    id: 2,
    name: "Hoàng Hưng Phát",
    position: `Backend và Database`,
    avatar: '/t2.jpg',
  },
  {
    id: 3,
    name: "Nguyễn Thành Long",
    position: "Backend và Database",
    avatar: '/t3.jpg',
  },
  {
    id: 4,
    name: "Huỳnh Võ Công Lãm",
    position: "Tester và hỗ trợ",
    avatar: '/t3.jpg',
  },
];

const membersMap = members.map((item, index) => (
  <div key={index} className="col-md-3 col-sm-6 mx-auto">
    <div className="box">
      <div className="img-box">
        <img src={item.avatar}/>
      </div>
      <div className="detail-box">
        <h5>{item.name}</h5>
        <h6>{item.position}</h6>
      </div>
    </div>
  </div>
));

function MyTeam() {
  return (
    <section className="team_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Các thành viên trong "công ty" chúng tôi</h2>
          <p>
          Trong công ty Taxi Tây Ninh, chúng tôi tự hào có đội ngũ thành viên đa tài, nhiệt huyết và luôn sẵn sàng phục vụ khách hàng một cách chuyên nghiệp và nhanh nhẹn.
          </p>
        </div>
        <div className="row">
          {membersMap}
        </div>
      </div>
    </section>
  );
}

export default MyTeam;
