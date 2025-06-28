import React from 'react'

export default function BookAppointment() {
  return (
    <div className='flex mx-10 mt-24 mb-10 justify-between  bg-white rounded-md border-b-2 border-gray-200 border-l-2 shadow-[2px_2px_5px_rgba(0,0,0,0.1)] p-10'>
        <div>
            <h2 className='text-3xl my-5 font-bold'>চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন</h2>
            <p className='text-xl'>• ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ স্টাইল।</p>
        </div>
        <div>
            <button className='bg-blue-500 text-white'>Book Appointment</button>
        </div>
    </div>
  )
}
