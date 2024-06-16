import React from "react";

const Bangladesh = () => {
  const gridItemsData = [
    {
      imageSrc: "/images/national.png",
      title: "করমুক্ত আয়সীমা ৪ লাখ টাকা করার অনুরোধ",
      category: "জাতীয়",
      time: "১ ঘন্টা আগে",
    },
    {
      imageSrc: "/images/national.png",
      title: "করমুক্ত আয়সীমা ৪ লাখ টাকা করার অনুরোধ",
      category: "জাতীয়",
      time: "১ ঘন্টা আগে",
    },
  ];

  const GridItem = ({ imageSrc, title, category, time }) => {
    return (
      <div className="grid_item flex gap-3 mb-2 border-b-2 pb-4">
        <div className="flex-shrink-0">
          <img src={imageSrc} className="w-24 h-24 object-cover" alt="" />
        </div>
        <div className="texts flex-grow">
          <p className="text-2xl">{title}</p>
          <p className="flex items-center gap-2 text-gray-600">
            <span>{category}</span> | <span className="block">{time}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="national py-5 px-2">
      <h1 className="text-3xl mb-4 font-bold">
        <span>বাংলাদেশ</span>
      </h1>
      <div className="bg-gray-300 h-1 w-full mb-2"></div>
      <div className="bg-blue-100 p-4 flex flex-col md:flex-row items-center rounded justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src="/path-to-your-icon.png"
          alt="Icon"
          className="w-6 h-6 mr-2"
        />
        <span className="text-red-500 font-bold">আমার এলাকার খবর</span>
      </div>
      <div className="flex flex-col md:flex-row items-center md:ml-4 justify-between w-full md:w-auto">
        <select className="border border-gray-300 p-2 rounded bg-blue-100 mx-1 mb-2 md:mb-0 w-full md:w-auto">
          <option>বিভাগ</option>
          {/* Add your options here */}
        </select>
        <select className="border border-gray-300 p-2 rounded bg-blue-100 mx-1 mb-2 md:mb-0 w-full md:w-auto">
          <option>জেলা</option>
          {/* Add your options here */}
        </select>
        <select className="border border-gray-300 p-2 rounded bg-blue-100 mx-1 mb-2 md:mb-0 w-full md:w-auto">
          <option>উপজেলা</option>
          {/* Add your options here */}
        </select>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded flex items-center mt-4 md:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.42-1.42l4.96 4.95a1 1 0 01-1.42 1.42l-4.95-4.95zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
        খুঁজুন
      </button>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5">
        <div className="col-span-1 md:col-span-4  pb-4">
          {gridItemsData.map((item, index) => (
            <GridItem
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              category={item.category}
              time={item.time}
            />
          ))}
        </div>
        <div className="col-span-1 md:col-span-5 pb-4">
          <div>
            <img src="/images/national.png" alt="" className="w-full mb-4" />
          </div>
          <p className="flex gap-2 w-full items-center justify-end text-gray-600">
            <span>জাতীয়</span> | <span className="block">১ ঘন্টা আগে</span>
          </p>
          <h1 className="text-3xl font-bold mb-2">
            দলীয় সিদ্ধান্ত রক্ষায় কঠোর / উপজেলা নির্বাচনে ভোট বর্জনে খুশি বিএনপি
          </h1>
          <p>
            সরকারি চাকরিতে বেতন কাঠামোর ৯ম থেকে ১৩তম গ্রেডে (আগের প্রথম ও দ্বিতীয় শ্রেণির) মুক্তিযোদ্ধা কোটাসহ কোটা বেতন কাঠামোর ৯ম থেকে ১৩তম গ্রেডে (আগের প্রথম ও দ্বিতীয় শ্রেণির) মুক্তিযোদ্ধা কোটাসহ কোটা পদ্ধতি বাতিলের সরকারি চাকরিতে বেতন কাঠামোর ৯ম থেকে ১৩তম গ্রেডে আগের প্রথম ও দ্বিতীয় শিক্ষার্থীরা...।
          </p>
        </div>
        <div className="col-span-1 md:col-span-3">
          {gridItemsData.map((item, index) => (
            <GridItem
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              category={item.category}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bangladesh;
