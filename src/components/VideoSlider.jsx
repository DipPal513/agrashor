"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPhotoVideo } from "react-icons/fa";

const VideoSlider = () => {
  const settings = {
    draggable: true,
    dots: false,
    infinite: true,
    speed: 500,
     focusOnSelect:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="videoslider rounded p-2 my-5 border-2 border-gray-200">
      <div className="title mb-2 text-2xl flex items-center gap-2 font-bold">
        <FaPhotoVideo />
        <span>ভিডিও</span>
      </div>
      <div className="sliders">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className="p-2 ">
              <iframe className="w-full" src="https://www.youtube.com/embed/mlIUKyZIUUU" title="OOPs Tutorial in One Shot | Object Oriented Programming | in C++ Language | for Placement Interviews" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
