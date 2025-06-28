"use client";
import React, { useEffect, useState } from "react";

export default function OurServices() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetch("/data/mydata.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  function getPreviewWords(text, wordCount = 4) {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  }

  return (
    <div className="p-6 mx-10">
      <h2 className="text-2xl text-center font-bold mb-4">আমাদের সেবা সমূহ</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4   rounded-md shadow-md bg-white"
          >
           <div className="items-center flex justify-center">
             <img
              src={service.image}
              alt={service.title}
              className="w-20 rounded mb-3"
            />
           </div>
            <h3 className="text-lg text-center font-semibold">{service.title}</h3>
            <p className="text-sm ml-3 text-gray-700 mt-2">
              {getPreviewWords(service.description, 4)}
            </p>

            <button
              className=" text-blue-500 my-5 font-bold"
              onClick={() => {
                setSelectedService(service);
                document.getElementById("service_modal").showModal();
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Shared modal outside the loop */}
      <dialog id="service_modal" className="modal">
        <div className="modal-box">
          {selectedService && (
            <>
              <h3 className="font-bold text-lg">{selectedService.title}</h3>
              <p className="py-4">{selectedService.description}</p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
