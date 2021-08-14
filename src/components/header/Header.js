import React, { useState } from "react";
import "./Header.css";
import jordan from "../image/jordan.png";
import nikelogo from "../image/nike logo.png";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Caroucel from "../carousel/Caroucel";

function Header() {
  const [input, setInput] = useState("");

  const handleSearchBtn = (e) => {
    const contnentCollection = document.querySelector(
      ".header__contnentCollection"
    );
    const header__content = document.querySelector(".header__content");
    const header__logo = document.querySelector(".header__logo");
    const header__contentRight = document.querySelector(
      ".header__contentRight"
    );
    const header__top = document.querySelector(".header__top");
    const header__closeBtn = document.querySelector(".header__closeBtn");
    const heartSvg = document.querySelector(".heartSvg");
    const header__input = document.querySelector(".header__input");
    const headerSearchbarCollection = document.querySelector(
      ".header__searchbar__Collection"
    );

    header__top.style.transform = "translateY(-50px)";
    header__top.style.transition = "1s";
    header__closeBtn.style.display = "block";
    heartSvg.style.width = "0";
    header__input.style.width = "70%";
    headerSearchbarCollection.style.transform = "scaleY(1)";
    contnentCollection.style.display = "none";
    header__content.style.transform = "translateY(-35px)";
    header__logo.style.flex = "0";
    header__contentRight.style.width = "70%";
  };
  const closeFunc = () => {
    const header__content = document.querySelector(".header__content");
    const header__logo = document.querySelector(".header__logo");
    const header__contentRight = document.querySelector(
      ".header__contentRight"
    );
    const header__top = document.querySelector(".header__top");
    const header__closeBtn = document.querySelector(".header__closeBtn");
    const heartSvg = document.querySelector(".heartSvg");
    const header__input = document.querySelector(".header__input");
    const headerSearchbarCollection = document.querySelector(
      ".header__searchbar__Collection"
    );
    const contnentCollection = document.querySelector(
      ".header__contnentCollection"
    );
    header__top.style.transform = "translateY(0px)";
    contnentCollection.style.display = "flex";
    // header__content.style.position = "relative";
    header__logo.style.flex = "1";
    header__contentRight.style.width = "25%";
    header__closeBtn.style.display = "none";
    heartSvg.style.width = "25%";
    header__content.style.transform = "translateY(0)";

    header__input.style.width = "50%";
    headerSearchbarCollection.style.transform = "scaleY(0)";
  };

  return (
    <div className="header">
      <div className="header__top">
        <img src={jordan} alt="" />
        <div className="header__topCollection">
          <li className="headerTop__listItem">
            Help
            <div className="headerTop__right__Collection">
              <h3>Help</h3>
              <div className="headerTop__right__listItem">
                <a href="#">Order Status</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Shipping & Delivery</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Return</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Size Charts</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Contact us</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Privacy Police</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Terms of Sale</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Terms of use</a>
              </div>
              <div className="headerTop__right__listItem">
                <a href="#">Send Us Feedback</a>
              </div>
            </div>
          </li>
          <li className="headerTop__listItem">Join us</li>
          <li className="headerTop__listItem">Sign in</li>
        </div>
      </div>
      <div className="header__content">
        <div className="header__logo">
          <img src={nikelogo} alt="" />
        </div>
        <div className="header__contnentCollection">
          <li className="headerContent__listItem ">
            <a href="">New Realises</a>
          </li>
          <li className="headerContent__listItem">
            <a href="">Men</a>
          </li>
          <li className="headerContent__listItem">
            <a href="">Women</a>
          </li>
          <li className="headerContent__listItem">
            <a href="">Kids</a>
          </li>
          <li className="headerContent__listItem">
            <a href="">Customise</a>
          </li>
          <li className="headerContent__listItem">
            <a href="">Sale</a>
          </li>
          <li className="headerContent__listItem">
            <a href="">Back to School</a>
          </li>
        </div>
        <div className="header__contentRight">
          <div className="header__input">
            <button type="submit" onClick={handleSearchBtn}>
              <FiSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="heartSvg">
            <FiHeart />
            <BsBag />
          </div>

          <div className="header__closeBtn" onClick={closeFunc}>
            <FaTimes />
          </div>
        </div>
      </div>
      <div className="header__searchbar__Collection">
        <h4>Popular Search Terms</h4>
        <a href="#" className="header__searchbar__listItem">
          Air Force 1
        </a>
        <a href="#" className="header__searchbar__listItem">
          Jordan
        </a>
        <a href="#" className="header__searchbar__listItem">
          Air Max
        </a>
        <a href="#" className="header__searchbar__listItem">
          Blazer
        </a>
      </div>
      <div className="header__carousel">
        <Caroucel />
      </div>
    </div>
  );
}

export default Header;
