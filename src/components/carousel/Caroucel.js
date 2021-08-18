import React, { useState, useEffect } from "react";
import "./carousel.css";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

function Caroucel() {
  // const handleleftbtn = () => {
  //   const text1 = document.querySelector(".text1");
  //   const text2 = document.querySelector(".text2");
  //   text1.style.transform = "translate(-4000px)";
  //   text2.style.transform = "translate(0)";
  // };
  // const handlerightbtn = () => {
  //   const text1 = document.querySelector(".text1");
  //   const text2 = document.querySelector(".text2");
  //   text1.style.transform = "translate(0)";
  //   text2.style.transform = "translate(4000px)";
  // };

  const [text, setText] = useState("first");

  useEffect(() => {
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");

    setTimeout(() => {
      if (text === "text1") {
         text2.style.transform = "translate(650px)";
         text1.style.transform = "translate(-4000px)";
        setText("text2");
      } else {
        text2.style.transform= "translate(4000px)";
        text1.style.transform = "translate(650px)";

        setText("text1");
      }
    }, 5000);
  }, [text]);

  return (
    <div className="carousel">
      {/* <div className="left__arrow" onClick={handleleftbtn}>
        <BsArrowBarLeft />
      </div> */}

      <div className="text__container">
        <div className="text1">
          <h1>Text 1</h1>
        </div>
        <div className="text2">
          <h1>Text 2</h1>
        </div>
      </div>
      {/* <div className="right__arrow" onClick={handlerightbtn}>
        <BsArrowBarRight />
      </div> */}
    </div>
  );
}

export default Caroucel;
