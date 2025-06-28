// components/HeroSection.jsx
"use client";
import React from "react";

export default function Booking() {
  return (
//     <div className="relative w-full h-[400px] group overflow-hidden">
//   {/* Background Image with initial darkness and darker on hover */}
//   <div
//     className="lg:mx-10 lg:w-full h-[300px] mx-auto w-[350px] absolute inset-0 bg-cover bg-center transition duration-500 brightness-75 group-hover:brightness-50"
//     style={{ backgroundImage: "url('/serviceImages/leaf.jpg')" }}
//   ></div>

//   {/* Text or Content over the image */}
//   <div className="relative  flex justify-center items-center h-full">
//     <h1 className="text-white text-center font-bold">চিকিৎসার জন্য নাম লেখাতে আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন</h1>
//     <button>Book Appointment</button>
//   </div>
// </div>

<div>
  <div
    className="relative mt-12 lg:mt-28 group lg:mx-10 lg:w-full mx-auto w-[350px] h-[400px] overflow-hidden rounded-lg"
  >
    {/* Background image with hover dim effect */}
    <div
      className="absolute inset-0 brightness-75 bg-cover bg-center transition duration-500 group-hover:brightness-50"
      style={{
        backgroundImage: "url('/serviceImages/leaf.jpg')",
      }}
    ></div>

    {/* Content on top of the image */}
    <div className="relative z-10 flex justify-center items-center h-full text-neutral-content text-center">
      <div className="">
        <h1 className="mb-3 text-white text-2xl font-extrabold">চিকিৎসার জন্য নাম লেখাতে আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন</h1>
        
        <button className="btn btn-primary btn-sm">Book Appointment</button>
      </div>
    </div>
  </div>
</div>

  );
}
