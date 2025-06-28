'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Review() {
  return (
    <section id="reviews">
      <div className="w-full">
        <div className="mt-12 lg:mt-32 mx-auto px-4">
        <h2 className="text-center text-black text-2xl font-bold">সুখী হওয়ার গল্প</h2>

        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide className="p-4  text-center bg-white ">
<p className="text-gray-600 w-[900px] mx-auto my-7 font-extrabold italic">আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি।। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে আনেক ভালো ফিল করছি।</p>
<div className="flex mb-4 justify-center items-center">
  <img className="rounded-full w-32" src="/serviceImages/reviewer.png" alt="" />
</div>
<p className=" text-black font-bold ">গুড়িয়া খাতুন</p>
        </SwiperSlide>
        <SwiperSlide className="p-4 text-center bg-white ">
<p className="text-gray-600 w-[900px] mx-auto my-7 font-extrabold italic">আমার আব্বুর সুগার , ও হার্টের পেসেন্ট । পিস ডাইবেটিস সেন্টারে চিকিৎসা এ শুরুতে সুগার ছিল ৩৮০ , মেডিসিন রেগুলার খেত , মাঝে মাঝে ইনসুলিন ও নিতো। । চিকিৎসার ২০ দিনের মাথায় সেটা এখন নেমে এসেছে ১৬০ ।। এখন সুগারের মেডিসিন ছাড়ায় আছে , কোনো সমস্যা হয়না।।</p>
<div className="flex mb-4 justify-center items-center">
  <img className="rounded-full w-32" src="/serviceImages/reviewer2.png" alt="" />
</div>
<p className=" text-black font-bold ">Tarikul Sk</p>
        </SwiperSlide>
        
      </Swiper> 
      </div>
    </div>
    </section>
   
  );
}
