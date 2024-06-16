import React from "react";

const National = () => {
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
          <img src={imageSrc} className=" w-32 rounded h-24 object-cover" alt="national_image" />
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
      <h1 className="text-3xl mb-4">
        <span>জাতীয়</span>
      </h1>
      <div className="bg-gray-300 h-1 w-full mb-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5">
        <div className="col-span-1 md:col-span-6 xl:col-span-4 pb-4">
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
        <div className="col-span-1 md:col-span-6 xl:col-span-5 pb-4">
          <div>
            <img src="/images/national.png" alt="" className="w-full mb-4" />
          </div>
          <p className="flex gap-2 w-full items-center justify-end text-gray-600">
            <span>জাতীয়</span> | <span className="block">১ ঘন্টা আগে</span>
          </p>
          <h1 className="text-3xl font-bold mb-2">
            দলীয় সিদ্ধান্ত রক্ষায় কঠোর / উপজেলা নির্বাচনে ভোট বর্জনে খুশি
            বিএনপি
          </h1>
          <p>
            সরকারি চাকরিতে বেতন কাঠামোর ৯ম থেকে ১৩তম গ্রেডে (আগের প্রথম ও
            দ্বিতীয় শ্রেণির) মুক্তিযোদ্ধা কোটাসহ কোটা বেতন কাঠামোর ৯ম থেকে ১৩তম
            গ্রেডে (আগের প্রথম ও দ্বিতীয় শ্রেণির) মুক্তিযোদ্ধা কোটাসহ কোটা
            পদ্ধতি বাতিলের সরকারি চাকরিতে বেতন কাঠামোর ৯ম থেকে ১৩তম গ্রেডে আগের
            প্রথম ও দ্বিতীয় শিক্ষার্থীরা...।
          </p>
        </div>
        <div className="col-span-1 md:col-span-6 xl:col-span-3">
          <div className="mb-4">
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
          <div className="img">
            <img src="/images/national_ad.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default National;
