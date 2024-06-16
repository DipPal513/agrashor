"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearchOutline, IoMenuSharp, IoSearch } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const menuItems = [
  { href: "/", label: "Home", icon: <TiHome />, isIcon: true },
  { href: "/", label: "জাতীয়" },
  { href: "/", label: "সর্বশেষ" },
  { href: "/", label: "সারাদেশ" },
  { href: "#", label: "রাজনীতি" },
  { href: "#", label: "বিশ্ব" },
  { href: "#", label: "বানিজ্য" },
  { href: "#", label: "স্বাস্থ্য" },
  { href: "#", label: "শিক্ষা" },
  { href: "#", label: "বিনোদন" },
  { href: "#", label: "খেলা" },
  { href: "#", label: "অডিও" },
  { href: "#", label: "ভিডিও" },

];

const BottomHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stickyNav, setIsSticky] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`px-2 bg-white duration-300 transition-all border-gray-200 border-b-2 ${
          stickyNav ? "fixed top-0 left-0 w-full shadow-lg z-10" : ""
        }`}
      >
        <div className="max-w-screen-xl mx-auto md:py-1">
          <ul className="bottom_menu flex font-bold items-center justify-between p-4 md:p-0 mt-0 md:mt-0 text-xl border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white">
            <li className="hidden bottom_header_logo">
              <Image
                src={"/images/logo.jpg"}
                className="logo"
                width={200}
                height={150}
                alt="Logo"
              />
            </li>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`menu_item block py-2 px-3 ${
                    item.isIcon
                      ? "text-white bg-blue-700 rounded md:bg-transparent text-2xl md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                      : "rounded md:bg-transparent md:p-0 md:dark:bg-transparent"
                  }`}
                  aria-current="page"
                >
                  {item.icon || item.label}
                </Link>
              </li>
            ))}
            <li
              className="menu_bar text-2xl cursor-pointer visible"
              onClick={toggleSidebar}
            >
              <IoMenuSharp />
            </li>
          </ul>
        </div>
      </nav>

      {/* Off-Canvas Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[90vw] md:w-1/3 h-full bg-white shadow-lg transform z-10 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="top_sidebar shadow-lg py-3 mb-3">
          <div className="flex items-center">
            <div>
              <Image
                src={"/images/logo.jpg"}
                className="logo sm:w-full w-[167px]"
                width={200}
                height={150}
                alt="Logo"
              />
            </div>
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-gray-700 text-3xl"
            >
              &times;
            </button>
          </div>
          <div className="social_icons flex items-center justify-between px-2 text-xl mt-4">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </div>
          <div className="date ps-3 mt-3">12 June 2024</div>
        </div>
        <ul className="mt-5 space-y-2 px-4 side_nav">
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
          {menuItems.map((item, index) => (
            <li key={index} className="hover:ps-2 transition-all duration-200 hover:bg-[#1288b0] hover:text-white cursor-pointer">
              <Link href={item.href} className="text-gray-900 hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default BottomHeader;
