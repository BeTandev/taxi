import React from "react";
import Header from "../../Header";
import SecondHeader from "../../Header/SecondHeader";
import AboutUS from "../../aboutUs";
import Footer from "../../Footer";

function AboutUsPage(){
    return(
        <>
            <SecondHeader></SecondHeader>
            <Header></Header>
            <br></br>
            <AboutUS></AboutUS>
            <br></br>
            <Footer></Footer>
        </>
    )
}

export default AboutUsPage