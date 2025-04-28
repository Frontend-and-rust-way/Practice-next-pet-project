"use client";
import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderImages } from '../mock/mock-slider';

export function ImageSlider() {
  return (
    <div className={cn("w-[303px] h-[453px] md:w-[433px] md:h-[648px] mx-auto relative")}>
      <button className="text-[rgba(103,104,105,1)] swiper-button-prev-custom absolute left-[-60px] md:left-[-80px] top-1/2 -translate-y-1/2 z-10 rounded-full p-2 ">
        <ChevronLeft size={54} />
      </button>
      <button className="text-[rgba(103,104,105,1)] swiper-button-next-custom absolute right-[-60px] md:right-[-80px] top-1/2 -translate-y-1/2 z-10 rounded-full p-2 ">
        <ChevronRight size={54} />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom"
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {sliderImages.map((src, index) => (
          <SwiperSlide key={src}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className=" w-full h-auto rounded-2xl shadow-md"
              width={336}
              height={600}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
