import React, { useEffect, useState } from "react";
import "./Landing.css";
import { useHistory } from "react-router";
import headerBg from "../../Assets/images/landing-header-bg.png";
import maskLogo from "../../Assets/images/mask-logo.png";
import newLogo from "../../Assets/images/petrola.png";
import headerVector from "../../Assets/images/landing-vector.png";
import Colors from "../../Helper/Colors";
import { Button, Input } from "antd";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAdData } from "../../Store/Action";
import noImage from "../../Assets/images/no_image.svg";
import bannerImage from "../../Assets/images/landing-banner.png";
import mobileImage from "../../Assets/images/landing-mobile.png";
import namadImage from "../../Assets/images/namad.png";
import bazarImage from "../../Assets/images/bazaar.svg";
import googleImage from "../../Assets/images/googleplay.svg";
import landingNewBanner from "../../Assets/images/banner2.jpg";
import mobileView from "../../Assets/images/mobile-view.png";
import Env from "../../Constant/Env.json";
import axios from "axios";
import Carousel from "react-elastic-carousel";

const Landing = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [category, setCategory] = useState(null);
  const [ads, setAds] = useState(null);
  const [breakPoints, setBreakPoints] = useState([
    { width: 320, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 650, itemsToShow: 3, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 6 },
    { width: 1750, itemsToShow: 7 },
  ]);

  const getCategories = async () => {
    let array = [];
    try {
      const response = await axios.get(Env.baseUrl + "/Categories");
      response.data.data.map((cat) => {
        if (cat.parent === "0") {
          console.log(cat);
          array.push(cat);
        }
      });
      setCategory(array);
    } catch (err) {
      console.log(err);
      toast.error("خطا در برقراری ارتباط", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  const getHomeData = async () => {
    try {
      const response = await axios.post(Env.baseUrl + "/GetHomeData", {});
      setAds(response.data.data.newAds);
    } catch (err) {
      console.log(err);
      toast.error("خطا در برقراری ارتباط", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  const goToSingle = (data) => {
    dispatch(setAdData(data));
    history.push("/ads/view");
  };

  useEffect(() => {
    getCategories();
    getHomeData();
  }, []);

  const landingLogin = () => {
    if (localStorage.getItem("username")) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-header-nav">
          <div className="landing-header-logo">
            <img src={maskLogo} alt="logo" />
          </div>
          <div className="landing-header-links">
            <span onClick={() => history.push("/home")}>خانه</span>
            <span onClick={() => history.push("/vip")}>ویژه</span>
            <span onClick={() => history.push("/contact")}>تماس با ما</span>
          </div>
        </div>
        <div className="landing-header-body">
          <div>
            <img src={headerVector} alt="petrola" />
          </div>
          <div>
            <span style={{ fontWeight: "700" }}></span>
            <span>
              <span
                style={{
                  fontWeight: "900",
                  fontSize: "20px",
                  marginLeft: "3px",
                }}
              >
                «تولید کنندگان و تامین کنندگان»
              </span>
              کالا و خدمات خود را سریع و آسان در پترولا به اشتراک بگذارید.
              <br />
              <span
                style={{
                  fontWeight: "900",
                  fontSize: "20px",
                  marginLeft: "3px",
                }}
              >
                «تجار و بازرگانان»
              </span>
              نیازهای کالایی خود را سریع و آسان از طریق پترولا جستجو کنید.
            </span>
            <div>
              <Button
                onClick={() => history.push("/home")}
                className="btn-dark"
              >
                مشاهده آگهی ها
              </Button>
              <Button onClick={landingLogin} className="btn-gold">
                ورود به پترولا
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="new-banner">
        <div>نمایشگاه دائمی محصولات ایرانی در حلب</div>
        <div>
          <Button
            style={{
              border: "1px solid #FFC412",
              height: "70px",
              marginLeft: "20px",
            }}
            onClick={() => (window.location.href = "https://expo.petrola.ir")}
            className="btn-gold"
          >
            وب سایت نمایشگاه
          </Button>
          <Button
            onClick={() =>
              (window.location.href = "https://expo.petrola.ir/register")
            }
            className="btn-dark"
            style={{ border: "1px solid #FFC412", height: "70px" }}
          >
            ثبت نام در نمایشگاه
          </Button>
        </div>
      </div>
      <div
        className="slider-wrapper"
        style={{ marginBottom: "70px", marginTop: "40px" }}
      >
        <div
          style={{
            fontSize: "22px",
            marginBottom: "15px",
            fontWeight: "700",
            width: "100%",
            textAlign: "center",
          }}
        >
          دسته بندی ها
        </div>
        <Carousel breakPoints={breakPoints} itemsToScroll={1} itemsToShow={7}>
          {category &&
            category.map((d, index) => (
              <div
                className="landing-cat"
                onClick={() => history.push("/home")}
              >
                <img src={d.img} alt="slider" />
                <span>{d.name}</span>
              </div>
            ))}
        </Carousel>
      </div>
      <div className="slider-wrapper-ads">
        <div
          style={{
            fontSize: "22px",
            fontWeight: "700",
            width: "100%",
            textAlign: "center",
          }}
        >
          پربازدیدترین آگهی ها
        </div>
        <Carousel breakPoints={breakPoints} itemsToScroll={1} itemsToShow={7}>
          {ads &&
            ads.map((data) => (
              <div
                onClick={() => goToSingle(data)}
                style={{ backgroundColor: Colors.gray }}
                className="home-ads landing-home-ads"
              >
                <div>
                  {data.img !== "https://app.petrola.ir/uploads/" ? (
                    <img src={data.img} alt="ads" />
                  ) : (
                    <img src={noImage} alt="no image" />
                  )}
                </div>
                <div>
                  <span>{data.persianName}</span>
                  <span style={{ margin: "2px 0 7px 0" }}>
                    {data.englishName}
                  </span>
                  <div className="home-ads-infos">
                    <div style={{ backgroundColor: Colors.gold }}>
                      {data.isVip === "0" && "عادی"}
                      {data.isVip === "1" && "ویژه"}
                      {data.isVip === "2" && "آماده تحویل"}
                    </div>
                    <div style={{ backgroundColor: Colors.gray }}>
                      {data.type === "0" && "خرید"}
                      {data.type === "1" && "فروش"}
                      {data.type === "2" && "خدمات"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      <img src={landingNewBanner} alt="banner" style={{ width: "100%" }} />
      <div className="slider-wrapper-ads">
        <div
          style={{
            fontSize: "22px",
            fontWeight: "700",
            width: "100%",
            textAlign: "center",
          }}
        >
          برترین فروشندگان
        </div>
        <Carousel breakPoints={breakPoints} itemsToScroll={1} itemsToShow={7}>
          {ads &&
            ads.map((data) => (
              <div
                onClick={() => goToSingle(data)}
                style={{ backgroundColor: Colors.gray }}
                className="home-ads landing-home-ads"
              >
                <div>
                  {data.img !== "https://app.petrola.ir/uploads/" ? (
                    <img src={data.img} alt="ads" />
                  ) : (
                    <img src={noImage} alt="no image" />
                  )}
                </div>
                <div>
                  <span>{data.persianName}</span>
                  <span style={{ margin: "2px 0 7px 0" }}>
                    {data.englishName}
                  </span>
                  <div className="home-ads-infos">
                    <div style={{ backgroundColor: Colors.gold }}>
                      {data.isVip === "0" && "عادی"}
                      {data.isVip === "1" && "ویژه"}
                      {data.isVip === "2" && "آماده تحویل"}
                    </div>
                    <div style={{ backgroundColor: Colors.gray }}>
                      {data.type === "0" && "خرید"}
                      {data.type === "1" && "فروش"}
                      {data.type === "2" && "خدمات"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      <div className="landing-app-section">
        <div>
          <div className="landing-app-section-title">اپلیکیشن پترولا</div>
          <div>
            باتوجه به افزایش سرعت مبادلات تجاری ، بازرگانی و ضرورت جستجو نیازهای
            کالایی و همچنین اطلاع رسانی در خصوص محصولات تولید کنندگان و تامین
            کنندگان برآن شدیم سایت و اپلیکیشن پترولا را طراحی کنیم که پاسخگوی
            نیاز صنایع ، تجار و بازرگانان باشد
          </div>
          <div>
            <Button
              onClick={() =>
                (window.location.href = "https://Petrola.ir/app.apk")
              }
            >
              <img src={bazarImage} alt="bazar" />
              دانلود از بازار
            </Button>
            <Button
              onClick={() =>
                (window.location.href = "https://Petrola.ir/app.apk")
              }
            >
              <img src={googleImage} alt="google" />
              دانلود مستقیم
            </Button>
          </div>
        </div>
        <div>
          <img src={mobileView} style={{ width: "230px" }} alt="app" />
        </div>
      </div>
      <div className="landing-footer">
        <div>
          <img style={{ width: "150px" }} src={maskLogo} alt="logo" />
          <div>
            باتوجه به افزایش سرعت مبادلات تجاری ، بازرگانی و ضرورت جستجو نیازهای
            کالایی و همچنین اطلاع رسانی در خصوص محصولات تولید کنندگان و تامین
            کنندگان برآن شدیم سایت و اپلیکیشن پترولا را طراحی کنیم که پاسخگوی
            نیاز صنایع ، تجار و بازرگانان باشد
          </div>
          <a
            referrerpolicy="origin"
            target="_blank"
            href="https://trustseal.enamad.ir/?id=231820&amp;Code=hh2XxlXkWckVPD6G1SXn"
          >
            <img
              referrerpolicy="origin"
              src="https://Trustseal.eNamad.ir/logo.aspx?id=231820&amp;Code=hh2XxlXkWckVPD6G1SXn"
              alt=""
              style={{ cursor: "pointer" }}
              id="hh2XxlXkWckVPD6G1SXn"
            />
          </a>
        </div>
        <div>
          <div className="landing-footer-menu">
            <div>
              <span
                onClick={() =>
                  (window.location.href = "https://Petrola.ir/app.apk")
                }
              >
                دانلود اپلیکیشن
              </span>
              <span onClick={() => history.push("/login")}>ورود به پترولا</span>
              <span>درباره ما</span>
              <span>تماس با ما</span>
            </div>
            <div>
              <span>برترین فروشندگان</span>
              <span>پربازدیدترین آگهی ها</span>
              <span>برترین خدمات دهندگان</span>
              <span>جدیدترین آگهی ها</span>
            </div>
          </div>
          <div className="footer-social">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-telegram"></i>
          </div>
          <div className="landing-footer-input">
            <Button className="btn-dark">عضویت</Button>
            <Input placeholder="ایمیل خود را وارد کنید" />
          </div>
        </div>
      </div>
      <div className="landing-footer-cpright">
        تمامی حقوق مادی و معنوی این سامانه متعلق به پترولا میباشد
      </div>
    </div>
  );
};
export default Landing;
