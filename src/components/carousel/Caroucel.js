import React from "react";
import "./carousel.css";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

function Caroucel() {
  const handleleftbtn = () => {
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    text1.style.transform = "translate(-4000px)";
    text2.style.transform = "translate(0)";
  };
  const handlerightbtn = () => {
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    text1.style.transform = "translate(0)";
    text2.style.transform = "translate(4000px)";
  };

  return (
    <div className="carousel">
      <div className="left__arrow" onClick={handleleftbtn}>
        <BsArrowBarLeft />
      </div>
      <div className="text__container">
        <h1 className="text1">Text 1</h1>
        <h1 className="text2">Text 2</h1>
      </div>
      <div className="right__arrow" onClick={handlerightbtn}>
        <BsArrowBarRight />
      </div>
    </div>
  );
}

export default Caroucel;
