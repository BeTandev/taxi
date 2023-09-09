import React from "react";
import Preferential from "../../Preferential";
import AboutUS from "../../AboutUS";
import MyTeam from "../../MyTeam";;
import SecondHeader from "../../Header/SecondHeader";
import Header from "../../Header";
import Footer from "../../Footer";
import Partner from "../../Partner";
import Contract from "../../Contract";

function HomePage() {
  return (
    <>
      <SecondHeader></SecondHeader>
      <Header></Header>
      <Preferential></Preferential>
      <AboutUS></AboutUS>
      <Partner></Partner>
      <MyTeam></MyTeam>
      <Contract></Contract>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
