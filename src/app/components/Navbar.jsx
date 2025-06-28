import React from 'react'

export default function Navbar() {
  const links = (
    <>
     <ul className='lg:flex items-center w-full justify-center gap-x-5'>
      <li className='text-[17px]'>হোম</li>
      <li className='text-[17px]'>সেবা</li>
      <li className='text-[17px]'>রিভিউ</li>
      <li className='text-[17px]'>যোগাযোগ</li>
      <li className='text-[17px]'>আমাদের সম্পর্কে</li>
      <li className='text-[17px]'>FAQ</li>
      <li><button className='bg-blue-600 text-[17px] text-white hover:bg-blue-800'>বুক অ্যাপয়েন্টমেন্ট</button></li>
      <li><button className='bg-blue-600 text-[17px] text-white hover:bg-blue-800'>BMI Calculator</button></li>
      <li><button className='bg-blue-600 text-[17px] text-white hover:bg-blue-800'>Download app</button></li>
      <li><button className='bg-blue-600 text-[17px] text-white hover:bg-blue-800'>লগিন করুন</button></li>
      <li>Shop Now</li>
     </ul>
    </>
  )

  return (
    <header className="w-full ">
 
   
      <div className="flex justify-between items-center px-4 py-4 lg:hidden">
        <img src="/logo/task.logo.png" alt="logo" className="w-40" />
       <div className="dropdown dropdown-bottom dropdown-center">
  <button tabIndex={0} className="btn btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    {links}
  </ul>
</div>
      </div>

    
      <div className='border-b-2 border-gray-300 pb-4'>
        <div className="hidden  mx-5 lg:flex justify-between ml-5  pt-5">
        <img src="/logo/task.logo.png" alt="logo" className="w-[215px]" />
       
        <ul className="menu menu-horizontal gap-x-4">
          {links}
        </ul>
      
      </div>
      </div>


      
    </header>
  )
}
