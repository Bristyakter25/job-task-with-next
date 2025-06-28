"use client";
import React, { useEffect } from 'react';

export default function LifestyleSection() {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className='mt-5'>
      <div className='flex text-center font-extrabold justify-center items-center mt-16 mb-10 gap-x-3'>
        <h2 className='font-extrabold text-black text-2xl'>স্বাস্থ্যকর লাইফস্টাইল</h2>
        <img className='w-8' src="/logo/square_16597161.png" alt="" />
      </div>

      <div className='grid w-[350px] lg:w-[900px] mx-auto grid-cols-1 lg:grid-cols-2 gap-6'>
        
        {/* Facebook Box with Shadow */}
        <div className="p-4 ">
          <div className="fb-page "
            data-href="https://www.facebook.com/mdabdulkaiyumpeacelibrary"
            data-tabs="timeline"
            data-width=""
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/mdabdulkaiyumpeacelibrary" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/mdabdulkaiyumpeacelibrary">
                Visit us on Facebook
              </a>
            </blockquote>
          </div>
        </div>

        {/* Text Box with Shadow */}
        <div className='lg:w-[650px] w-[350px] p-5 bg-white rounded-md border border-gray-200 shadow-[2px_2px_5px_rgba(0,0,0,0.1)] leading-6 text-[12px]'>

          <h2 className='text-2xl mb-6 font-bold text-gray-600'>স্বাস্থ্যকর লাইফস্টাইল</h2>
          <p className='text-black mb-4 text-[12px] font-extrabold'>কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)</p>
          <p className='text-[13px] leading-6'>১) আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</p>
          <p className='text-[13px] leading-6'>২) আমরা রোযা রাখতে বলি।</p>
          <p className='text-[13px] leading-6'>৩) আমরা ভালো ঘুমাতে বলি।</p>
          <p className='text-[13px] leading-6'>৪) আমরা দৈনিক ব্যায়াম করতে বলি।</p>
          <p className='text-[13px]'>৫) আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</p>
          <p className='text-black leading-6 text-[12px] mt-3 font-extrabold'>‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’</p>
          <p className='text-[13px]'>জেনে রাখবেন</p>
          <p className='text-black leading-6 text-[12px] font-extrabold'>“দুর্বল মুমিনের চেয়ে শক্তিশালী মুমিন উত্তম”</p>
          <p className='text-black leading-6 text-[12px] font-extrabold'>“মানুষ বড়ই আশ্চর্যজনক ও বোকা”</p>
          <p className='text-[13px]'>সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।</p>
          <p className='text-[13px]'>তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।</p>
          <p className='text-[13px]'>নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।</p>
          <p className='text-[13px]'>
            “স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস” আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার 
            <a 
              className='text-blue-500' 
              href="https://www.facebook.com/mdabdulkaiyumpeacelibrary/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              আব্দুল কাইয়ুম পীস লাইব্রেরী
            </a> 
            এর কাছে।
          </p>
        </div>
      </div>
    </div>
  );
}
