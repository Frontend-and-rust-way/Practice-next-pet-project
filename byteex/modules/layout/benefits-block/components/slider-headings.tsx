"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect } from 'react';
import { images } from '../mock/mock-slider-heading';

export function SwiperSliderImages() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-pagination-bullet {
        background: #c4c4c4;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background: black;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-lg"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center w-full h-[250px]">
              <Image
                src={item.src}
                alt={`Slide ${index}`}
                width={item.width}
                height={item.height}
                className="object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
