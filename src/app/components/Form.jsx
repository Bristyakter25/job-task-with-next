"use client";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="w-full pr-20  mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
      <h2 className=" font-semibold mb-6 text-center">মেসেজ পাঠান</h2>
      <form onSubmit={handleSubmit} className="space-y-7">

        {/* নামঃ *, নাম্বারঃ * */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* নামঃ * */}
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-300 bg-transparent pt-6 pb-1 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
              placeholder="নামঃ *"
            />
            <label
              htmlFor="name"
              className="absolute left-2 top-1 text-gray-500 text-sm transition-all duration-200 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              নামঃ <span className="text-red-600">*</span>
            </label>
          </div>

          {/* নাম্বারঃ * */}
          <div className="relative w-full">
            <input
              type="text"
              name="number"
              id="number"
              required
              value={formData.number}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-300 bg-transparent pt-6 pb-1 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
              placeholder="নাম্বারঃ *"
            />
            <label
              htmlFor="number"
              className="absolute left-2 top-1 text-gray-500 text-sm transition-all duration-200 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              নাম্বারঃ <span className="text-red-600">*</span>
            </label>
          </div>
        </div>

        {/* ইমেইলঃ */}
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="peer w-full border-b-2 border-gray-300 bg-transparent pt-6 pb-1 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
            placeholder="ইমেইলঃ "
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-1 text-gray-500 text-sm transition-all duration-200 
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
          >
            ইমেইলঃ
          </label>
        </div>

        {/* মেসেজঃ * */}
        <div className="relative w-full">
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="peer w-full border-b-2 border-gray-300 bg-transparent pt-6 pb-1 px-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 resize-none"
            placeholder="মেসেজঃ *"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-2 top-1 text-gray-500 text-sm transition-all duration-200 
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
          >
            মেসেজঃ <span className="text-red-600">*</span>
          </label>
        </div>

        {/* Subject */}
        

        {/* Submit */}
        <div className=" mt-10">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
           মেসেজ পাঠান
          </button>
        </div>
      </form>
    </div>
  );
}
