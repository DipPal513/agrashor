"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearchOutline, IoMenuSharp, IoSearch } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const BottomHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stickyNav, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`px-2 bg-white duration-200 transition-all border-gray-200 border-b-2 ${
          stickyNav ? "fixed top-0 left-0 w-full shadow-sm" : " "
        }`}
      >
        <div className="max-w-screen-xl mx-auto md:py-3">
          <ul className="bottom_menu flex font-bold items-center justify-between p-4 md:p-0 mt-0 md:mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white">
            <li className="hidden bottom_header_logo">
              <Image
                src={"/images/logo.jpg"}
                className="logo"
                width={200}
                height={150}
              />
            </li>
            <li>
              <Link
                href="/"
                className="menu_item block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent text-2xl md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                <TiHome />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="menu_item block py-2 px-3  rounded md:bg-transparent md:dark:bg-transparent"
                aria-current="page"
              >
                আজকের খবর
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="menu_item block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                ই-পেপার
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="menu_item block py-2 px-3 rounded md:bg-transparent md:p-0 md:dark:bg-transparent"
                aria-current="page"
              >
                মেগাজিন
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="menu_item block py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                আর্কাইভ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="menu_item block py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                স্যোশাল মিডিয়া
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="menu_item block py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                বাংলা কনভার্টার
              </Link>
            </li>
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
        className={`fixed top-0 right-0 w-2/3 sm:w-1/3 h-full bg-white shadow-lg transform z-10 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="top_sidebar shadow-lg py-3 mb-3">
          <div className="flex items-center">
           <div>
           <Image
              src={"/images/logo.jpg"}
              className="logo sm:w-full w-[167px]"
              width={200}
              height={150}
            />
           </div>
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-gray-700 text-3xl"
            >
              &times;
            </button>
          </div>
          <div className="social_icons flex items-center justify-between px-2 font-2xl mt-4">
            <FaFacebook className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaLinkedin className="text-xl" />
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
          <li>
            <Link href="/" className="text-gray-900">
              আজকের খবর
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-900">
              ই-পেপার
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-900">
              মেগাজিন
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-900">
              আর্কাইভ
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-900">
              স্যোশাল মিডিয়া
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-900">
              বাংলা কনভার্টার
            </Link>
          </li>
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
