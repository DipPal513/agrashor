import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-color)] py-4 text-lg text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <div className="logo mb-4">
              <img src="/images/logo.png" alt="Logo" className="h-10" />
            </div>
            <div>
              <p className="font-bold text-red-500">সম্পাদকঃ মোস্তফা কামাল</p>
              <p className="mb-2 break-words">editor@khaborerkagoj.com</p>
              <p className="text-xl">
                ১১৫ কাজী নজরুল ইসলাম এভিনিও, লেভেল-১৩ বাংলামোটর, ঢাকা-১০০০ থেকে
                <br />
                প্রকাশক মোস্তফা কামাল কর্তৃক প্রকাশিত। স্কাইব্রিজ প্রিন্টিং এন্ড
                প্যাকেজিং লিমিটেড, ৭/এ/১ তেজগাও শিল্প এলাকা, ঢাকা থেকে মুদ্রিত।
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <ul className="mb-6 md:mb-0 md:w-1/3">
            <li className="mb-2">গোপনীয়তার নীতি</li>
            <li className="mb-2">যোগাযোগ</li>
            <li className="mb-2">আর্কাইভ</li>
            <li className="mb-2">আমাদের সম্পর্কে</li>
          </ul>

          {/* Right Section */}
          <div className="md:w-1/3">
            <ul className="mb-6 md:mb-0">
              <li className="mb-2">বার্তা সম্পাদকীয় ও ফিচার বিভাগ</li>
              <li className="mb-2 break-words">+৮৮০২২২৬৬৬৫০৫৩-৪</li>
              <li className="mb-2">বিজ্ঞাপন</li>
              <li className="mb-2 break-words">+৮৮০২২২৬৬৬৫০৫১</li>
              <li className="mb-2 break-words">+৮৮০২২২৬৬৬৫০৫২</li>
              <li className="mb-2 break-words">info@khaborerkagoj.com</li>
            </ul>
            <div className="social_links">
              <p className="mb-2">অনুসরণ করুন</p>
              {/* Add social media icons/links here */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
