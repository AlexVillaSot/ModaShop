import React from "react";
import "../Slider/Slider.scss";
import { motion } from "framer-motion";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      {/*  IMAGE CONTAINER */}
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="slider__img" src={data[0]} alt="" />
        <img className="slider__img" src={data[1]} alt="" />
        <img className="slider__img" src={data[2]} alt="" />
      </div>

      {/* ARROWS */}
      <div className="slider__arrows">
        {/* LEFT ARROW */}
        <motion.div
          whileTap={{ scale: 1.2 }}
          className="slider__arrow"
          onClick={prevSlide}
        >
          <WestOutlinedIcon />
        </motion.div>

        {/* RIGHT ARROW */}
        <motion.div
          whileTap={{ scale: 1.2 }}
          className="slider__arrow"
          onClick={nextSlide}
        >
          <EastOutlinedIcon />
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
