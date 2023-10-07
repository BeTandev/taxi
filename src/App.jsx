import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import UuDaiPage from "./components/pages/UuDaiPage";
import MyTeamPage from "./components/pages/MyTeamPage";
import Booking from "./components/pages/Booking";
import PartnerPage from "./components/pages/PartnerPgae";
import RegisPartner from "./components/pages/RegisPartner";
import { getUsernameLogin } from "./store/UsernameLoginSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MessagePage from "./components/pages/AdminPage/MessagePage.jsx";
import './css/style.scss'
import './css/responsive.scss'
import UserPage from "./components/pages/AdminPage/UsersPage";
import BookingPage from "./components/pages/AdminPage/BookingPage.jsx";
import LoginPage from "./components/pages/AuthPage/LoginPage";


function App() {
  const dispatch = useDispatch()
  let checkAccount1 = JSON.parse(sessionStorage.getItem("account"));
  let checkAccount2 = JSON.parse(localStorage.getItem("account"))
  let account = ""
  if(checkAccount1){
    account = checkAccount1
  }else{
    account = checkAccount2
  }

  useEffect(() => {
    if(account){
      sendLoginData(account)
    }
  }, [account])

  const sendLoginData = async (account) => {
    try {
      const response = await fetch("https://apiuser-zavj.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });

      if (response.ok) {
        dispatch(getUsernameLogin(account.username));
      } else {
        alert("Vui lòng kiểm tra lại tài khoản và mật khẩu của bạn");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about-us" element={<AboutUsPage></AboutUsPage>}></Route>
        <Route path="/uu-dai" element={<UuDaiPage></UuDaiPage>}></Route>
        <Route path="/my-team" element={<MyTeamPage></MyTeamPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/booking" element={<Booking></Booking>}></Route>
        <Route path="/partner" element={<PartnerPage></PartnerPage>}></Route>
        <Route path="/partner-page" element={<RegisPartner></RegisPartner>}></Route>
        <Route path="/admin/message-page" element={<MessagePage></MessagePage>}></Route>
        <Route path="/admin/user-page" element={<UserPage></UserPage>}></Route>
        <Route path="/admin/booking-page" element={<BookingPage></BookingPage>}></Route>
      </Routes>
      <br></br>
    </div>
  );
}

export default App;
