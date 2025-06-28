"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner() {
  return (
    <div className="mt-3">
      <div>
        <img src="/banner/banner title.jpg" alt="Banner" />
      </div>
      <div>
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ autoplay added
          modules={[Pagination, Navigation, Autoplay]} // ✅ include Autoplay
          className="mySwiper"
        >
          <SwiperSlide><img src="/banner/banner 1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/banner/banner-2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/banner/banner-3.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
