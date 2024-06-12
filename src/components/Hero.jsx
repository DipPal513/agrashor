import React from "react";

const Hero = () => {
  return (
    <div className="py-3">
      <div className="top-news-recent bg-blue-700">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 py-2 text-white">
          <p>recent</p>
          <p>মাদারীপুরে দুই ট্রাকের সংঘষর্ে নিহত ২ </p>
          <p></p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-between gap-2 mt-2">
        <div className="grid grid-cols-3">
          <div className="col-span-3 border-red-500 border-3">
            <div className="flex  gap-4">
              <div>
                <img src="/images/hero.png" className="w-full" alt="" />
              </div>
              <p className="text-3xl font-bold">
                দলীয় সিদ্ধান্ত রক্ষায় কঠোর / উপজেলা নির্বাচনে ভোট বর্জনে খুশি
                বিএনপি
              </p>
            </div>
          </div>
          {[{}, {}, {}].map((item, index) => (
            <div key={index} className="box border-4">
              how its going
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 border-3 border-red-500 bg-green-500">
          <div className="col-span-2 flex">
            <div>
              <img src="/images/hero1.png" alt="" className="w-full" />
            </div>
            <div className="">
              <p>Jatiyo | 1hr ago</p>
              <p>
                দলীয় সিদ্ধান্ত রক্ষায় কঠোর / উপজেলা নির্বাচনে ভোট বর্জনে খুশি
                বিএনপি
              </p>
            </div>
          </div>
        </div>
        <div className="ad border-2 p-1 rounded grid-cols-3">
          <img src="/images/ad.png" alt="ad image" />
          <img src="/images/ad.png" alt="ad image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
