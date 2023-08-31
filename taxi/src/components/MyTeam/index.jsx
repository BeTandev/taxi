import React from "react";

const members = [
  {
    id: 1,
    name: "Trần Lê Nhứt Tân",
    position: "Chủ tịch hội đồng quản trị",
    avatar: '/t1.jpg',
  },
  {
    id: 2,
    name: "Hoàng Hưng Phát",
    position: `NV "chăm sóc" khách hàng`,
    avatar: '/t2.jpg',
  },
  {
    id: 3,
    name: "Nguyễn Thành Long",
    position: "Cu li cấp cao",
    avatar: '/t3.jpg',
  },
  {
    id: 4,
    name: "Huỳnh Võ Công Lãm",
    position: "Bộ binh cơ giới",
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
            Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a
            euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget
            vitae malesuada, tortor tincidunt porta lorem lectus.
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
