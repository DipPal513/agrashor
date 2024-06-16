"use client";import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsCopy, BsWhatsapp, BsX } from "react-icons/bs";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";

const GridItem = ({ title, author, role, imageSrc }) => (
  <div className="flex items-center border-b-2 pb-3">
    <img src={imageSrc} alt={title} className="w-20 h-20 object-cover rounded" />
    <div className="ml-4">
      <p className="text-2xl">{title}</p>
      <p className="text-2xl">{author}</p>
      <div className="bg-gray-300 h-1 w-12 my-1"></div>
      <p className="text-xl">{role}</p>
    </div>
  </div>
);

const OpinionBankSurvey = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Set the locale to Bengali
    moment.locale("bn");

    // Function to update the current time
    const updateCurrentTime = () => {
      const now = moment();
      const formattedTime = now.format("LL, LTS"); // LL is for the full date, LTS is for time with seconds
      setCurrentTime(formattedTime);
    };

    // Update time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const items = [
    { title: "প্রবাসীদের পাশে দাঁড়াতে হবে", author: "মহিউদ্দিন আহমদ", role: "লেখক ও গবেষক", imageSrc: "/images/ad.png" },
    { title: "প্রবাসীদের পাশে দাঁড়াতে হবে", author: "মহিউদ্দিন আহমদ", role: "লেখক ও গবেষক", imageSrc: "/images/ad.png" },
  ];

  return (
    <div className="opinion p-3">
      {/* <h1 className="text-xl font-bold underline">Opinion</h1> */}
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-4 border-2 p-4 rounded">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <TiMessage />
              <span>মতামত</span>
            </h2>
            <div className="h-1 bg-gray-300 w-full mt-1 mb-2"></div>
          </div>
          <div className="content">
            {items.map((item, index) => (
              <GridItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="border-2 p-4 rounded mb-4">
            <div className="mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TiMessage />
                <span>ব্যাংক</span>
              </h2>
              <div className="h-1 bg-gray-300 w-full mt-1 mb-2"></div>
            </div>
            <div className="content">
              {items.map((item, index) => (
                <GridItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="border-2 p-4 rounded">
            <div className="mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2 ">
                <TiMessage />
                <span>বীমা</span>
              </h2>
              <div className="h-1 bg-gray-300 w-full mt-1 mb-2"></div>
            </div>
            <div className="content">
              {items.map((item, index) => (
                <GridItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 border-2 p-4 rounded">
          <div className="flex items-center gap-4 mb-4">
            <div className="logo"></div>
            <h2 className="text-2xl font-bold">অনলাইন জরিপ</h2>
          </div>
          <div className="h-1 w-full bg-red-500 mb-4"></div>
          <div className="mb-2">
            <p>{currentTime}</p>
          </div>
          <div className="im">
            <img src="/images/internet.png" className="rounded mb-4" alt="Internet Poll" />
            <p className="mb-4">বাজেটে মোবাইল ফোনের টকটাইম ও ইন্টারনেট প্যাকেজের ওপর কর বাড়ানোয় গ্রাহকের খরচ আরও বাড়বে. আপনি কি এটা সমর্থন করেন?</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="option1"
                  name="customRadio"
                  className="hidden peer"
                />
                <span className="w-6 h-6 inline-block border-2 border-gray-300 rounded-lg mr-2 peer-checked:bg-blue-500 peer-checked:border-blue-500 "></span>
                <label
                  htmlFor="option1"
                  className="flex items-center cursor-pointer border-2 border-gray-300 p-2 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white w-full"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="option2"
                  name="customRadio"
                  className="hidden peer"
                />
                <span className="w-6 h-6 inline-block border-2 border-gray-300 rounded-lg mr-2 peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
                <label
                  htmlFor="option2"
                  className="flex items-center cursor-pointer border-2 border-gray-300 p-2 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white w-full"
                >
                  No
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="option3"
                  name="customRadio"
                  className="hidden peer "
                />
                <span className="w-6 h-6 inline-block border-2 border-gray-300 rounded-lg  mr-2 peer-checked:bg-blue-500 peer-checked:border-blue-500"></span>
                <label
                  htmlFor="option3"
                  className="flex items-center cursor-pointer border-2 border-gray-300 p-2 rounded-xl peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white w-full"
                >
                  Not Sure
                </label>
              </div>
            </div>
          <div className=" flex items-center justify-center flex-col mt-5">
            <p>মোট ভোটদাতাঃ ১,১০১ জন</p>
          <div className="flex items-center justify-center py-5 gap-2 text-3xl">
              <FaFacebookF />
              <FaFacebookMessenger />
              <BsWhatsapp />
              <BsX />
              <IoLogoInstagram />
              <BsCopy />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionBankSurvey;
