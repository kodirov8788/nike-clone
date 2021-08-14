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


// var slideIndex = 1;
// showSlides(slideIndex);

// function handleleftbtn(n) {
//   showSlides((slideIndex += n));
// }

// function handlerightbtn(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("text1");
//   // var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }


  return (
    <div className="carousel">
      <div className="left__arrow" onClick={handleleftbtn}>
        <BsArrowBarLeft />
      </div>
      <h1 className="text1">Text 1</h1>
      <h1 className="text2">Text 2</h1>
      {/* <h1 className="text1">Text 3</h1> */}
      <div className="right__arrow" onClick={handlerightbtn}>
        <BsArrowBarRight />
      </div>
      {/* --------------- */}
      {/* <a class="prev" onclick="plusSlides(-1)">
        &#10094;
      </a>
      <a class="next" onclick="plusSlides(1)">
        &#10095;
      </a> */}
      {/* ----------------------- */}



      
    </div>
  );
}

export default Caroucel;
