import React from "react";
import SliderSection from "../SliderSection";
import HeroBg from "/hero-bg.jpg"

function Header() {
  return (
    <div className="hero_area">
        <div className="hero_bg_box">
          <img src={HeroBg} />
        </div>
        <SliderSection></SliderSection>
      </div>
  );
}

export default Header