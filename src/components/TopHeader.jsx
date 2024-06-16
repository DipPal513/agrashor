"use client";
import React, { useEffect, useState } from "react";
import { IoArchiveOutline, IoSearch, IoSearchCircleOutline } from "react-icons/io5";
import Calendar from 'date-bengali-revised'
import moment from "moment";
import "moment/locale/bn"; // Import Bengali locale
import "moment-hijri"; // Import Hijri calendar support
import Image from "next/image";
import { IoMdLocate } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { BsArchiveFill } from "react-icons/bs";

const TopHeader = () => {
  const [gregorianDate, setGregorianDate] = useState("");
  const [hijriDate, setHijriDate] = useState("");
  const [bengaliDate, setBengaliDate] = useState("");

  useEffect(() => {
    // Set the locale to Bengali
    moment.locale("bn");
    // let cal = new Calendar();
    // const bangla_date = cal.fromGregorian(new Date.now())
    // console.log(bangla_date)
    // Function to update the dates
    const updateDates = () => {
      const now = moment();

      // Format the Gregorian date in Bengali
      const formattedGregorianDate = now.format("LL");
      setGregorianDate(formattedGregorianDate);

      // Format the Hijri date
      const hijriMoment = now.clone().locale('en').format("iDD iMMMM iYYYY");
      setHijriDate(hijriMoment);

      // Format the Bengali date (using the Bengali calendar)
      const bengaliMoment = now.clone().locale('bn').format("DD MMMM YYYY");
      setBengaliDate(bengaliMoment);
    };

    // Update dates initially
    updateDates();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3 px-2 top_header">
      <div>
        <div className="search flex items-center mb-2">
          <input
            type="text"
            placeholder="অনুসন্ধান করুন"
            className="border rounded px-2 py-1"
          />
          <button className="cursor-pointer ms-2 text-xl">
            <IoSearch />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <IoMdLocate /> <p>ঢাকা</p>
          </div>
          <p>{bengaliDate}</p>
          <p>{gregorianDate}</p>
          <p>{hijriDate}</p>
        </div>
      </div>
      <div>
        <Image
          src={"/images/logo.jpg"}
          className="logo"
          width={300}
          height={150}
          alt="Logo"
        />
      </div>
      <div>
        <p className="text-red-500 text-xl mb-5">English Edition</p>
        <ul className="flex items-center gap-3">
          <li className="flex items-center gap-2">
            <BsArchiveFill />
            <p>আর্কাইভ</p>
          </li>
          <li className="flex items-center gap-2">
            <FaVideo />
            <p>ভিডিও</p>
          </li>
          <li className="flex items-center gap-2">
            <IoNewspaper />
            <p>ই-পেপার</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
