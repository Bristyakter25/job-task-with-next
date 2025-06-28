import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <section id="footer">
      <div className='mt-36 p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='w-[300px]'>
                <img className='w-[200px] my-5' src="/logo/task.logo.png" alt="" />
                <p className="leading-7">পীস লাইব্রেরী মূলত এটি একটি সংস্থা, ঔষধকে খাদ্য হিসেবে নয়, বরং খাদ্যকেই ঔষধ হিসেবে গ্রহণ করুন। এই স্লোগান নিয়ে আমাদের স্বাস্থ্যকর লাইফ স্টাইল এগিয়ে নিয়ে যাওয়ার চেষ্টা করছি।</p>
            </div>
            <div className='grid grid-cols-3 gap-x-3'>
                <div className=''>
                    <h2 className='mb-5 underline font-bold text-black'>ঠিকানা</h2>
                    <p>PeaceLibrary DIABETES CENTRE Vill-Sekhpur (Chandpur Brigde) Jharkhand Border</p>
<p>Po- Bhasaipaikar</p>
<p>Ps-Samserganj</p>
<p>Dist-Murshidabad</p>
<p>Pin-742202</p>
<p>State- West Bengal</p>
                </div>
                <div>
                    <h2 className='mb-5 underline font-bold text-black'>খোলা থাকে</h2>
                    <p>সোম – বৃহস্পতি<br />
(6 AM – 6 PM)<br />
শনি – রবি<br />
(6 AM – 6 PM)<br />
<span className='text-red-500 font-bold text-[18px]'>শুক্রবার বন্ধ থাকে</span></p>
                </div>
                    <div>
      <h2 className="mb-5 underline font-bold text-black">যোগাযোগ</h2>

   ফোন:<br />
      <div className="flex items-center gap-2 mb-2">
        
        <FaPhoneAlt className="text-green-600" />
        <a
          href="tel:+919732624907"
          className="text-blue-600 underline hover:text-blue-800"
        >
          +91 9732 624 907
        </a>
      </div>
হোয়াটসঅ্যাপ:<br />
      {/* WhatsApp */}
      <div className="flex items-center gap-2">
        <FaWhatsapp className="text-green-600" />
        <a
          href="https://wa.me/919732624907"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          +91 9732 624 907
        </a>
      </div>
    </div>
            </div>
        </div>
    </div>
    </section>
  )
}
