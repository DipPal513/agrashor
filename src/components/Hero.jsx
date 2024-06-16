import React from "react";

const Hero = () => {
  return (
    <div className="py-3">
      <div className="top-news-recent bg-blue-700">
        <div className="max-w-screen-xl mx-auto flex items-center px-2 py-2 text-white">
          <p className="pe-4">recent</p>
          <div className="news-heading-container overflow-hidden">
            <div className="news-heading">
              <p className="inline-block animate-marquee">
                মাদারীপুরে দুই ট্রাকের সংঘষর্ে নিহত ২ | আরও একটি সংবাদ শিরোনাম
              </p>
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 mt-2">
        <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="col-span-1 md:col-span-3 p-1 mb-3 border-2">
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <img src="/images/hero.png" className="w-full" alt="Hero" />
              </div>

              <p className="text-3xl font-bold">
                দলীয় সিদ্ধান্ত রক্ষায় কঠোর / উপজেলা নির্বাচনে ভোট বর্জনে খুশি
                বিএনপি
              </p>
            </div>
            <div className="my-2">
              <p className="flex gap-2 w-full items-center justify-end text-red-600 pe-2">
                <span>জাতীয়</span> | <span className="block">১ ঘন্টা আগে</span>
              </p>
              <p>
                সরকারি চাকরিতে বেতন কাঠামোর ৯ম থেকে ১৩তম গ্রেডে (আগের প্রথম ও
                দ্বিতীয় শ্রেণির) মুক্তিযোদ্ধা কোটাসহ কোটা পদ্ধতি বাতিলের
                সিদ্ধান্ত বহালে উচ্চ আদালতের রায়ের প্রতিবাদে ফের তৃতীয় দিনের মতো
                বিক্ষোভ কর্মসূচি পালন করেছেন ঢাকা বিশ্ববিদ্যালয়ের (ঢাবি)
                শিক্ষার্থীরা।
              </p>
            </div>
          </div>
          {[{}, {}, {},{}, {}, {}].map((item, index) => (
            <div key={index} className="border-2 p-2">
              <div>
                <img src="/images/hero.png" alt="News" />
              </div>
              <div>
                <p className="flex gap-2 w-full items-center justify-end text-red-600">
                  <span>জাতীয়</span> |{" "}
                  <span className="block">১ ঘন্টা আগে</span>
                </p>
                <p>
                  দলীয় সিদ্ধান্ত রক্ষায় কঠোর / উপজেলা নির্বাচনে ভোট বর্জনে
                  খুশি বিএনপি
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="first_row md:col-span-1 flex flex-col items-center justify-evenly text-xl font-bold">
            <div className="border-2 p-2">
              <div>
                <img src="/images/argentina.png" alt="News" />
              </div>
              <div>
                <p className="flex gap-2 w-full items-center justify-end text-red-600">
                  <span>জাতীয়</span> |{" "}
                  <span className="block">১ ঘন্টা আগে</span>
                </p>
                <p>বিক্ষোভে উত্তাল আর্জেন্টিনা, ব্যাপক সংঘর্ষ</p>
              </div>
            </div>
            <div className="border-2 p-2 ">
              <div className="flex justify-evenly w-full mb-4">
                <button className="w-1/2 text-red border-b-4 border-red-600">
                  সর্বশেষ
                </button>
                <button className="w-1/2">সর্বাধিক পঠিত</button>
              </div>
              {[{}, {}, {}].map((item, index) => (
                <div className="grid_item flex gap-3 mb-2 border-b-2 pb-4">
                  <div className="flex-shrink-0">
                    <img
                      src="/images/hero1.png"
                      className="w-24 h-24 object-cover"
                      alt=""
                    />
                  </div>
                  <div className="texts flex-grow">
                    <p className="flex gap-2 w-full items-center justify-end text-red-600 pe-2 font-semibold">
                      <span>জাতীয়</span> |{" "}
                      <span className="block">১ ঘন্টা আগে</span>
                    </p>
                    <p className="text-xl font-light">
                      দলীয় সিদ্ধান্ত রক্ষায় কঠোর / উপজেলা নির্বাচনে ভোট বর্জনে
                      খুশি বিএনপি
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ad md:col-span-1 flex flex-col gap-2">
            <div className="border-2">
              <img src="/images/ad.png" alt="ad image" className="w-full" />
            </div>
            <div className="border-t-2 border-r-2 border-l-2">
              <div>
                <h2 className="text-2xl font-bold border-b-2 p-2 ">
                  প্রতিদিন হাদিস
                </h2>
                <div className="overflow-scroll h-[250px] overflow-x-hidden">
                  {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
                    (item, index) => (
                      <div className="box border-b-2 p-3">
                        পরিচ্ছেদঃ ২/২. তোমাদের দু’আ তোমাদের ঈমান।
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
